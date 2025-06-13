import Database from "./server/database/database.js";

import './server/database/models.js';

const database = Database.getInstance();

try {
    console.debug('Connecting to database');
    await database.connect();
    console.debug('Connected');

    console.debug('Synchronizing models with database');
    await database.sync();
    console.debug('Synchronized');
} catch (error) {
    console.error('Error in database connection or initialization');
    console.error(error);
    process.exit(1);
}