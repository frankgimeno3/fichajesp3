import {createEndpoint} from "../../../../../server/createEndpoint.js";
import {getCuentaById} from "../../../../../server/features/cuenta/CuentaService.js";
import {NextResponse} from "next/server";

export async function GET(request, context) {
    const idCuenta = context?.params?.id_cuenta;
    
    if (!idCuenta) {
        return new NextResponse('ID de cuenta requerido', { status: 400 });
    }

    try {
        // Extract email from request for authentication
        const baseKey = `CognitoIdentityServiceProvider.${process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || ''}`;
        const username = request.cookies.get(`${baseKey}.LastAuthUser`)?.value;
        
        if (!username) {
            return new NextResponse('No autenticado', { status: 401 });
        }

        const cuenta = await getCuentaById(idCuenta);

        if (!cuenta) {
            return new NextResponse('Cuenta no encontrada', { status: 404 });
        }

        return NextResponse.json(cuenta);
    } catch (error) {
        console.error('Error fetching cuenta:', error);
        return new NextResponse(error.message || 'Error al obtener la cuenta', { status: 500 });
    }
}
