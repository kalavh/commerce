import { join } from "path";
import settings from "../config/settings";
import knex, { Knex } from "knex";
import { knexSnakeCaseMappers, KnexMappers, Identity, Model } from "objection";
import { injectable } from "tsyringe";

type KnexConfigurations = {
    client: 'postgres' | 'sqlite3'
    debug: boolean
    connection: Knex.PgConnectionConfig
    pool: {
        idleTimeoutMillis: number
        min: number
        max: number
    }
    entities: { directory: string[] },
    migrations: { directory: string[] }
    seeds?: { directory: string[] }
    wrapIdentifier?(identifier: string, origWrap: Identity<string>): string
    postProcessResponse?(response: any): any;
}

@injectable()
export class DatabaseConfiguration {
    private readonly knexConfigurations: KnexConfigurations
    private knexConnection: Knex
    constructor() {
        const { postProcessResponse, wrapIdentifier } = knexSnakeCaseMappers() as KnexMappers
        this.knexConfigurations = {
            client: settings.database.DRIVER,
            debug: false,
            connection: {
                host: settings.database.HOST,
                port: settings.database.PORT,
                user: settings.database.USER,
                password: settings.database.PASSWORD,
                database: settings.database.DB_NAME,
            },
            entities: { directory: [join(__dirname, './models')] },
            migrations: {
                directory: [join(__dirname, './migrations')]
            },
            seeds: {
                directory: [join(__dirname, './seeds')]
            },
            pool: {
                idleTimeoutMillis: 35000,
                min: 0,
                max: 2,
            },
            postProcessResponse,
            wrapIdentifier
        }
        this.setGlobal()
    }

    private setGlobal() {
        this.knexConnection = knex(this.knexConfigurations)
        Model.knex(this.knexConnection);
    }

    connection() {
        return this.connection
    }

    async migrate() {
        console.info('Running Migrations')
        const migrated = await this.knexConnection.migrate.latest()
        if (!migrated.length) {
            console.info('There are no migrations to running')
        }
    }

    async seed() {
        console.info('Running Seeds')
        const seeded = await this.knexConnection.seed.run()
        if (!seeded.length) {
            console.info('There are no seeds to running')
        }
    }

    async rollback() {
        console.info('Running Rollback')
        const rollbacked = await this.knexConnection.migrate.rollback()
        if (!rollbacked.length) {
            console.info('There are no roolback to running')
        }
    }
}