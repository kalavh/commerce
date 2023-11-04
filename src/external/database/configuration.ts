import { join } from "path";
import settings from "../config/settings";
import knex, { Knex } from "knex";
import { knexSnakeCaseMappers, KnexMappers, Identity, initialize } from "objection";
import { injectable } from "tsyringe";

type connection = & Knex.PgConnectionConfig & {
    entities: string[]
    migrations: string[]
    migrationsTableName: string
}

type KnexConfigurations = {
    database: 'pg' | 'sqlite'
    debug: boolean
    connection: connection
    pool: {
        idleTimeoutMillis: number
        min: number
        max: number
    }
    wrapIdentifier(identifier: string, origWrap: Identity<string>): string
    postProcessResponse(response: any): any;
}

@injectable()
export class DatabaseConfiguration {
    private readonly knexConfigurations: KnexConfigurations
    private knex: Knex
    constructor() {
        const { postProcessResponse, wrapIdentifier } = knexSnakeCaseMappers() as KnexMappers
        this.knexConfigurations = {
            database: 'pg',
            debug: false,
            connection: {
                host: settings.HOST,
                port: 3306,
                user: settings.DATABASE_USER,
                password: settings.DATABASE_PASSWORD,
                database: settings.DATABASE_NAME,
                entities: [join(__dirname, './models/*')],
                migrations: [join(__dirname, './migrations/*')],
                migrationsTableName: "custom_migration_table",
            },
            pool: {
                idleTimeoutMillis: 35000,
                min: 0,
                max: 2,
            },
            postProcessResponse,
            wrapIdentifier
        }
        this.knex = knex(this.knexConfigurations)
    }

    connection() {
        return this.knex
    }

    async migrate() {
        console.info('Running Migrations')
        this.checkConnection()
        const migrated = await this.knex.migrate.latest()
        if (!migrated.length) {
            console.info('There are no migrations to running')
        }
    }

    async seed() {
        console.info('Running Migrations')
        this.checkConnection()
        const seeded = await this.knex.seed.run()
        if (!seeded.length) {
            console.info('There are no seeds to running')
        }
    }

    async rollback() {
        console.info('Running Migrations')
        this.checkConnection()
        const rollbacked = await this.knex.migrate.rollback()
        if (!rollbacked.length) {
            console.info('There are no roolback to running')
        }
    }

    removeConnection() {
        this.knex.destroy()
    }

    private checkConnection() {
        if (!this.knex) {
            throw new Error('You destroyed knexConnection')
        }
    }
}