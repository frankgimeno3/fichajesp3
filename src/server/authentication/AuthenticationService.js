import {CognitoJwtVerifier} from "aws-jwt-verify";
import {COGNITO} from "../../env.js";

const idVerifier = CognitoJwtVerifier.create({
    userPoolId: COGNITO.USER_POOL_ID,
    clientId: COGNITO.CLIENT_ID,
    tokenUse: "id",
});

const accessVerifier = CognitoJwtVerifier.create({
    userPoolId: COGNITO.USER_POOL_ID,
    clientId: COGNITO.CLIENT_ID,
    tokenUse: "access",
});

export async function verifyIdToken(idToken){
    return idVerifier.verify(idToken);
}

export async function verifyAccessToken(accessToken){
    return accessVerifier.verify(accessToken);
}