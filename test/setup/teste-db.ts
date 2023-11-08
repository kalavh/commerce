import knex from "knex"
import { Model, knexSnakeCaseMappers } from "objection"
import { join } from "path"

export async function startDb() {
    const { postProcessResponse, wrapIdentifier } = knexSnakeCaseMappers()

    const settings = {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: ':memory:'
        },
        migrations: {
            directory: [join(__dirname, '../../src/external/database/migrations')]
        },
        postProcessResponse,
        wrapIdentifier
    }
    const knexInstance = knex(settings)
    Model.knex(knexInstance)

    await knexInstance.migrate.latest()

    return knexInstance
}