import {ModificationModel, TimeLogModel} from "../../database/models.js";
import {ModificationStatusEnum} from "./ModificationStatusEnum.js";
import {ModificationNotFound} from "./ModificationError.js";
import {TimeLogNotFound} from "../timeLog/TimeLogError.js";

export async function createModification(logId, newType, comment, creatorId){
    const timeLog = await TimeLogModel.findByPk(logId);

    if(!timeLog) throw new TimeLogNotFound("Este fichaje no existe");

    const modification = await ModificationModel.create({
        timeLogId: logId,
        status: ModificationStatusEnum.pending,
        newType: newType,
        comment: comment,
        createdBy: creatorId
    })

    return modification;
}

export async function setModificationStatus(modificationId, newStatus){
    const found = await ModificationModel.findByPk(modificationId);

    if(!found) throw new ModificationNotFound("No encontrado")

    found.status = newStatus;
    found.reviewedAt = new Date();

    await found.save();

    return found;
}

export async function getUsersModifications(status){
    const modifications = await ModificationModel.findAll({
        where:{
            status:status
        },
        include: {model: TimeLogModel, as: 'timeLog'},
    });

    return modifications;
}