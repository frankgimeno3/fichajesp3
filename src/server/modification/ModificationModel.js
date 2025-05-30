import Database from "../database/database.js";
import {Model, DataTypes} from "sequelize";
import {ModificationStatusEnum} from "./ModificationStatusEnum.js";
import {TimeLogTypeEnum} from "../timeLog/TimeLogTypeEnum.js";

const database = Database.getInstance();
const sequelize = database.getSequelize();


class ModificationModel extends Model {
}

ModificationModel.init({
    id: {type: DataTypes.BIGINT, primaryKey: true, unique: true, autoIncrement: true},
    timeLogId: {type: DataTypes.BIGINT, allowNull: false},
    status: {type: DataTypes.ENUM(...Object.values(ModificationStatusEnum)), allowNull: false},
    newType: {type: DataTypes.ENUM(...Object.values(TimeLogTypeEnum)), allowNull: false},
    comment: {type: DataTypes.TEXT},
    createdBy: {type: DataTypes.BIGINT, allowNull: false},
    reviewedBy: {type: DataTypes.BIGINT},
    reviewedAt: {type: DataTypes.DATE},
}, {
    sequelize,
    modelName: 'modification',
    underscored: true,
    indexes: [
        { fields: ['time_log_id'] },
        { fields: ['created_by'] },
        { fields: ['reviewed_by'] },
        { fields: ['status'] },
        { fields: ['reviewed_at'] },
    ]
});

export default ModificationModel;
