import knex from "knex"
import { Model } from "objection"

export function startDb() {
    const settings = {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: ':memory:'
        }
    }

    const knexInstance = knex(settings)
    Model.knex(knexInstance)

    knexInstance.migrate.latest()

    return knexInstance
}