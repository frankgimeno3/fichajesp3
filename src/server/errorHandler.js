import {NextResponse} from "next/server";
import {TimeLogNotFound} from "./features/timeLog/TimeLogError.js";

export function errorHandler(error){

    if(error instanceof TimeLogNotFound){
        return NextResponse.json({message: error.message}, {status: 404});
    }

    console.error("Internal server error");
    console.error(error);
    // TODO Implement AWS SNS for internal server errors
    return NextResponse.json({message: "Error interno del servidor "}, {status: 500});
}