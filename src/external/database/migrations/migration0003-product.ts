import { Knex } from 'knex'

const tableName = 'product'
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('name').notNullable()
        table.string('sku').notNullable()
        table.text('descr').notNullable()
        table.decimal('price')
        table
            .uuid('category_id')
            .references('product_category.id')
            .notNullable()
            .onDelete('CASCADE')
            .index()
        table
            .uuid('inventory_id')
            .references('product_inventory.id')
            .notNullable()
            .onDelete('CASCADE')
            .index()
        table.uuid('discount_id')
            .references('discount.id')
            .notNullable()
            .onDelete('CASCADE')
            .index()
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

