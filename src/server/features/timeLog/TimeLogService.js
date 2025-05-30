import {Op} from "sequelize";
import ModificationModel from "../modification/ModificationModel.js";
import {TimeLogModel} from "../../database/models.js";

export async function createTimeLog(userId, type, comment) {
    const timeLog = await TimeLogModel.create({
        createdBy: userId,
        type: type,
        comment: comment
    })

    return timeLog;
}

export async function getTimeLogs(userId, afterTime, beforeTime) {
    const timeLogs = await TimeLogModel.findAll({
        where: {
            [Op.and]: [
                {createdBy: userId},
                afterTime ? {created_at: {[Op.gte]: afterTime}} : {},
                beforeTime ? {created_at: {[Op.lte]: beforeTime}} : {},
            ]
        },
        include: {model: ModificationModel, as: 'modifications'},
        order: [
            ['created_at', 'DESC'],
            [{model: ModificationModel, as: "modifications"}, "created_at", "DESC"]
        ],
    });

    return timeLogs;
}