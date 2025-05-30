import {createEndpoint} from "../../../../server/createEndpoint.js";
import Joi from "joi";
import {getTimeLogs} from "../../../../server/features/timeLog/TimeLogService.js";

export const GET = createEndpoint(async (request, body) => {
    const {afterTime, beforeTime} = body;
    const timeLogs = await getTimeLogs(request.sub, afterTime, beforeTime);

    return new Response(timeLogs, {status: 200});
}, Joi.object({
    afterTime: Joi.date().required(),
    beforeTime: Joi.date().required()
}), true)