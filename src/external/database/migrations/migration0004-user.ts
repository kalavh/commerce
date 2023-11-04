
import { Knex } from 'knex'

const tableName = 'user'
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('username').notNullable()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.integer('telephone').notNullable()
        table.timestamps({
            defaultToNow: true,
            useCamelCase: false,
            useTimestamps: true,
        })
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(tableName)
}

