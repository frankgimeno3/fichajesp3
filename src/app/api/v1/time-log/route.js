import {createEndpoint} from "../../../../server/createEndpoint.js";
import Joi from "joi";
import {TimeLogTypeEnum} from "../../../../server/features/timeLog/TimeLogTypeEnum.js";
import {createTimeLog} from "../../../../server/features/timeLog/TimeLogService.js";

export const POST = createEndpoint((request, body)=>{
    const {type, comments} = body;
    const timeLog = createTimeLog(request.sub,type, comments);

    return new Response(timeLog, {status: 200});
},Joi.object({
    type: Joi.string().valid(...Object.values(TimeLogTypeEnum)).required(),
    comments: Joi.string().optional()
}),true)