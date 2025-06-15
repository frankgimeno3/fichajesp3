import {Sequelize} from "sequelize";
import * as fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Database {
    static #instance;
    #sequelize;


    constructor() {
        this.#sequelize = new Sequelize(
            process.env.DATABASE_NAME,
            process.env.DATABASE_USER,
            process.env.DATABASE_PASSWORD,
            {
                logging: process.env.NODE_ENV === 'development' ? this.log : false,
                host: process.env.DATABASE_HOST,
                port: process.env.DATABASE_PORT,
                dialect: 'postgres',
                dialectOptions:{
                    ssl: {
                        require: true,
                        ca: fs.readFileSync(path.join(__dirname,'rds-ca.pem')).toString(),
                        rejectUnauthorized: process.env.NODE_ENV !== 'development',
                    }
                }
            }
        )
    }

    log(message){
        console.debug(`[Sequelize]: ${message}`)
    }


    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    getSequelize() {
        return this.#sequelize;
    }

    async connect() {
        await this.#sequelize.authenticate();
    }

    async sync() {
        await this.#sequelize.sync({alter: false, force: false})
    }
}

export default Database;