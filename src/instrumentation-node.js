import {defineAssociations} from "./database/associations.js";
import Database from "./database/database.js";

const database = Database.getInstance();

try {
    console.debug('Connecting to database');
    await database.connect();
    console.debug('Connected');

    console.debug('Defining associations');
    await defineAssociations();
    console.debug('Associations defined');

    console.debug('Synchronizing models with database');
    await database.sync();
    console.debug('Synchronized');

} catch (error) {
    console.error('Error in database connection or initialization');
    console.error(error);
    process.exit(1);
}