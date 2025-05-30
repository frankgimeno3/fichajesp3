import Database from "../database/database.js";
import {Model, DataTypes} from "sequelize";
import {TimeLogTypeEnum} from "./TimeLogTypeEnum.js";

const database = Database.getInstance();
const sequelize = database.getSequelize();


class TimeLogModel extends Model {
}

TimeLogModel.init({
    id: {type: DataTypes.BIGINT, primaryKey: true, unique: true, autoIncrement: true},
    createdBy: {type: DataTypes.BIGINT, allowNull: false},
    type: {type: DataTypes.ENUM(...Object.values(TimeLogTypeEnum)), allowNull: false},
    comment: {type: DataTypes.TEXT},
}, {
    sequelize,
    modelName: 'timeLog',
    underscored: true,
    indexes: [
        {fields: ['created_by']},
        {fields: ['type']},
        {fields: ['created_at']}
    ]
});

export default TimeLogModel;
