import { container } from 'tsyringe'

import { startDb } from '../../../../test/setup/teste-db'
import { CreateProductUseCase } from './create-product-use-case'

import { createInventory } from '../../../../test/fixtures/create-inventory'
import { DiscountModel } from '../../../external/database/models/discount'
import { InventoryModel } from '../../../external/database/models/inventory'
import { createDiscount } from '../../../../test/fixtures/create-discounts'
import { createProduct } from '../../../../test/fixtures/create-product'

describe('GetHealthUseCase', () => {
    test('should get health return', async () => {
        const db = await startDb()

        const sut = container.resolve(CreateProductUseCase)

        const discount = createDiscount()
        await DiscountModel.query().insert(discount)
        const inventory = createInventory()
        await InventoryModel.query().insert(inventory)

        const data = createProduct({ discountId: discount.id, inventoryId: inventory.id })
        const result = await sut.execute({ data })

        expect(result).toBe({ status: 'Server is running' })
    })
})
