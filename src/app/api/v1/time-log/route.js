import {createEndpoint} from "../../../../server/createEndpoint.js";
import Joi from "joi";
import {TimeLogTypeEnum} from "../../../../server/features/timeLog/TimeLogTypeEnum.js";

export const POST = createEndpoint((request, response)=>{

    return new Response(`Ok user ${request.sub}`, {status: 200});
},Joi.object({
    type: Joi.string().valid(...Object.values(TimeLogTypeEnum)).required(),
    comments: Joi.string().optional()
}),true)