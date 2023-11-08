import { randomUUID } from 'crypto'

import { ProductEntity } from '../../src/domain/entities/product'
import { faker } from '@faker-js/faker'

export function createProduct(fields: Partial<ProductEntity> = {}): ProductEntity {
    return {
        id: randomUUID(),
        name: faker.commerce.productName(),
        descr: faker.commerce.productDescription(),
        categoryId: randomUUID(),
        inventoryId: randomUUID(),
        price: Number(faker.commerce.price()),
        sku: '12314',
        createdAt: new Date().toISOString(),
        ...fields,
    }
}
