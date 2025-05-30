import TimeLogModel from "./TimeLogModel.js";

export async function createTimeLog(userId, type, comment){
    const response = await TimeLogModel.create({
        createdBy: userId,
        type: type,
        comment: comment
    })

    return response;
}