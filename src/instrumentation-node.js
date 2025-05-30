import {defineAssociations} from "./server/database/associations.js";
import Database from "./server/database/database.js";

// IMPORT HERE ALL MODELS SO SEQUELIZE COULD PROCESS THEM
import './server/modification/ModificationModel.js';
import './server/timeLog/TimeLogModel.js';
import {getUserRoles} from "./server/authorization/AuthorizationService.js";

const database = Database.getInstance();

try {
    // console.debug('Connecting to database');
    // await database.connect();
    // console.debug('Connected');
    //
    // console.debug('Defining associations');
    // await defineAssociations();
    // console.debug('Associations defined');
    //
    // console.debug('Synchronizing models with database');
    // await database.sync();
    // console.debug('Synchronized');
    await getUserRoles('admin@mail.com')
} catch (error) {
    console.error('Error in database connection or initialization');
    console.error(error);
    process.exit(1);
}