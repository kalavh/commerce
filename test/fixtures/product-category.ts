import { randomUUID } from 'crypto'

import { faker } from '@faker-js/faker'
import { ProductCategoryEntity } from '../../src/domain/entities/product-category'

export function createProductCategory(fields: Partial<ProductCategoryEntity> = {}): ProductCategoryEntity {
    return {
        id: randomUUID(),
        name: faker.commerce.productAdjective(),
        descr: faker.commerce.productMaterial(),
        createdAt: new Date().toISOString(),
        ...fields,
    }
}
