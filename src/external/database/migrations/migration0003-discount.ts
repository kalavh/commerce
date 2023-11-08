import { Knex } from 'knex'

const tableName = 'discounts'
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary()
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

