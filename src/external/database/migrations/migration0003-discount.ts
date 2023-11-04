import { Knex } from 'knex'

const tableName = 'discount'
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('name').notNullable()
        table.text('descr').notNullable()
        table.decimal('discount_percent').notNullable()
        table.boolean('active').defaultTo(true)
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

