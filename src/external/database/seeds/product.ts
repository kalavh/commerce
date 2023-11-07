import { logger } from "../../utils/logger";
import { DefaultModelOmit } from "../../../application/types/default-model-omit";
import { ProductEntity } from "../../../domain/entities/product";
import { faker } from '@faker-js/faker';
import { DiscountEntity } from "../../../domain/entities/discount";
import { InventoryEntity } from "../../../domain/entities/inventory";
import { DiscountModel } from "../models/discount";
import { InventoryModel } from "../models/inventory";
import { ProductModel } from "../models/product";
import { ProductCategoryEntity } from "../../../domain/entities/product-category";
import { ProductCategoryModel } from "../models/product-category";

export async function seed() {
    logger.info('Start Seeeds')

    const products: DefaultModelOmit<ProductEntity>[] = []
    const discounts: DefaultModelOmit<DiscountEntity>[] = []
    const inventories: DefaultModelOmit<InventoryEntity>[] = []
    const productCategory: DefaultModelOmit<ProductCategoryEntity>[] = []

    for (let i = 0; i < 100; i++) {
        if (faker.datatype.boolean(0.25)) {
            discounts.push({
                name: faker.commerce.productAdjective(),
                descr: faker.word.words(),
                discountPercent: faker.number.float({ min: 0.01, max: 0.8 }),
                active: true
            })
        }

        if (faker.datatype.boolean()) {
            productCategory.push({
                name: faker.commerce.productAdjective(),
                descr: faker.commerce.productMaterial(),
            })
        }

        inventories.push({
            quantity: faker.number.int({ max: 1000 })
        })
    }

    const discountQuery = await DiscountModel.query().insertAndFetch(discounts)
    const iventoryQuery = await InventoryModel.query().insertAndFetch(inventories)
    const productCategoryQuery = await ProductCategoryModel.query().insertAndFetch(productCategory)

    for (let inv of iventoryQuery) {
        products.push({
            name: faker.commerce.productName(),
            descr: faker.commerce.productDescription(),
            categoryId: faker.helpers.arrayElement(productCategoryQuery).id,
            inventoryId: inv.id,
            price: Number(faker.commerce.price()),
            sku: faker.vehicle.manufacturer(),
            discountId: faker.datatype.boolean(0.25) ? faker.helpers.arrayElement(discountQuery).id : undefined
        })
    }

    await ProductModel.query().insert(products)

}
