import {COGNITO} from "../env.js";
import {fetchNewTokens, verifyAccessToken, verifyIdToken} from "./features/authentication/AuthenticationService.js";
import {NextResponse} from "next/server.js";
import {getUserRoles} from "./features/authorization/AuthorizationService.js";
import {errorHandler} from "./errorHandler.js";
import {decodeJWT} from "@aws-amplify/core";

async function validate(request, schema) {
    if (!schema) return;
    const contentType = request.headers.get('content-type') ?? '';
    const method = request.method

    let data;
    let body;

    if (method === "GET") {
        const url = new URL(request.url);
        const params = url.searchParams;
        data = Object.fromEntries(params)
        body = data;
    } else if (contentType.includes('application/json')) {
        body = await request.json();
        data = body;
    } else if (contentType.includes('multipart/form-data')) {
        body = await request.formData();
        data = Object.fromEntries(body);
    } else {
        throw Error('Solicitud incorrecta');
    }

    const {value, error} = schema.validate(data);
    if (error) {
        throw new Error(`Solicitud no paso validacion: ${error}`);
    }

    return body;
}

async function checkTokens(request, response) {
    const baseKey = `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}`;
    const username = request.cookies.get(`${baseKey}.LastAuthUser`)?.value;

    if (!username) {
        throw new Error('Falta  cookie con el nombre de usuario')
    }

    let isRefreshed = false;
    let idToken = request.cookies.get(`${baseKey}.${username}.idToken`)?.value;
    let accessToken = request.cookies.get(`${baseKey}.${username}.accessToken`)?.value;

    const cookieKeys = {
        id: `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.${username}.idToken`,
        access: `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.${username}.accessToken`,
        refresh: `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.${username}.refreshToken`
    }

    try {
        await Promise.all([verifyIdToken(idToken), verifyAccessToken(accessToken)]);
    } catch (e) {
        const refreshToken = request.cookies.get(cookieKeys.refresh)?.value
        const data = await fetchNewTokens(refreshToken);
        idToken = data.id_token;
        accessToken = data.accessToken;
        isRefreshed = true;
    }
    const {payload} = decodeJWT(accessToken);
    return [username, payload.sub, isRefreshed, accessToken, idToken, cookieKeys];
}

export function createEndpoint(callback, validationSchema = null, isProtected = false, roles = []) {
    return async (request) => {
        const response = NextResponse.next();
        let data;
        try {
            data = await validate();
        } catch (e) {
            return new Response(e.message, {status: 400});
        }

        let username, sub, isRefreshed, accessToken, idToken, cookieKeys;
        if (isProtected) {
            try {
                [username, sub, isRefreshed, accessToken, idToken, cookieKeys] = await checkTokens(request, response);
                request.sub = sub;
            } catch (error) {
                return new Response(error.message, {status: 400});
            }
        }
        if (isProtected && roles.length > 0) {
            try {
                const userRoles = await getUserRoles(username);
                const hasAccess = userRoles.some(role => roles.includes(role));
                if(!hasAccess) return new Response("Prohibido ", {status: 403});
            } catch (e) {
                return new Response("Prohibido ", {status: 403});
            }
        }

        try {
            const response = await callback(request);
            if(isRefreshed){
                response.cookies.set({
                    name: cookieKeys.access,
                    value: accessToken,
                    secure: true,
                    maxAge: data.expires_in
                })
                response.cookies.set({
                    name: cookieKeys.id,
                    value: idToken,
                    secure: true,
                    maxAge: data.expires_in
                })
            }
            return response;
        } catch (error) {
            return errorHandler(error);
        }
    }
}