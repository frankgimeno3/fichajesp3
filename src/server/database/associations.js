import TimeLogModel from "../timeLog/TimeLogModel.js";
import ModificationModel from "../modification/ModificationModel.js";

export function defineAssociations() {
    TimeLogModel.hasMany(ModificationModel, {
        foreignKey: 'time_log_id',
        as: 'modifications',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })

    ModificationModel.belongsTo(TimeLogModel, {
        foreignKey: 'time_log_id',
        as: 'timeLog'
    })
}