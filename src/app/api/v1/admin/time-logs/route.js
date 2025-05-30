import {createEndpoint} from "../../../../../server/createEndpoint.js";
import {NextResponse} from "next/server";
import Joi from "joi";
import {getUsersTimeLogs} from "../../../../../server/features/timeLog/TimeLogService.js";

export const GET = createEndpoint(async (request, body)=>{
    const {afterTime, beforeTime} = body;
    const modifications = await getUsersTimeLogs(afterTime, beforeTime);

    return NextResponse.json(modifications);
},Joi.object({
    afterTime: Joi.date().required(),
    beforeTime: Joi.date().required()
}),true, ['admin'])