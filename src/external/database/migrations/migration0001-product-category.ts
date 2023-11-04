import { Knex } from 'knex'

const tableName = 'product_category'
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('name').notNullable()
        table.text('descr').notNullable()
        table.timestamps({
            defaultToNow: true,
            useCamelCase: true,
            useTimestamps: true,
        })
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(tableName)
}

