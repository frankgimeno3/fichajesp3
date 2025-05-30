import {createEndpoint} from "../../../../server/createEndpoint.js";
import Joi from "joi";
import {TimeLogTypeEnum} from "../../../../server/features/timeLog/TimeLogTypeEnum.js";
import {createTimeLog} from "../../../../server/features/timeLog/TimeLogService.js";
import {NextResponse} from "next/server";

export const POST = createEndpoint(async (request, body)=>{
    const {type, comment} = body;
    const timeLog = await createTimeLog(request.sub,type, comment);

    return NextResponse.json(timeLog);
},Joi.object({
    type: Joi.string().valid(...Object.values(TimeLogTypeEnum)).required(),
    comment: Joi.string().optional()
}),true)