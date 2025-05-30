
export function errorHandler(error){

    console.error("Internal server error");
    console.error(error);
    // TODO Implement AWS SNS for internal server errors
    return new Response("Error interno del servidor ", {status: 500});
}