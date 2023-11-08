import { randomUUID } from 'crypto'

import { faker } from '@faker-js/faker'
import { InventoryEntity } from '../../src/domain/entities/inventory'

export function createInventory(fields: Partial<InventoryEntity> = {}): InventoryEntity {
    return {
        id: randomUUID(),
        quantity: faker.number.int({ min: 1, max: 110 }),
        ...fields,
    }
}
