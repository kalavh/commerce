
import { Knex } from 'knex'

const tableName = 'users_address'
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table
            .uuid('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE')
            .index()
        table.string('address_line1').notNullable()
        table.string('address_line2').notNullable()
        table.string('city').notNullable()
        table.string('postal_code').notNullable()
        table.string('country').notNullable()
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

