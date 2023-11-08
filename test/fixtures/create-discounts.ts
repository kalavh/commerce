import { randomUUID } from 'crypto'

import { faker } from '@faker-js/faker'
import { DiscountEntity } from '../../src/domain/entities/discount'

export function createDiscount(fields: Partial<DiscountEntity> = {}): DiscountEntity {
    return {
        id: randomUUID(),
        name: faker.commerce.productAdjective(),
        descr: faker.word.words(),
        discountPercent: faker.number.float({ min: 0.01, max: 0.8 }),
        active: true,
        createdAt: new Date().toISOString(),
        ...fields,
    }
}
