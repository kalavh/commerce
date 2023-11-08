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
import { createProduct } from "../../../../test/fixtures/create-product";
import { createDiscount } from "../../../../test/fixtures/create-discounts";
import { createInventory } from "../../../../test/fixtures/create-inventory";
import { createProductCategory } from "../../../../test/fixtures/product-category";

export async function seed() {
    logger.info('Start Seeeds')

    const products: DefaultModelOmit<ProductEntity>[] = []
    const discounts: DefaultModelOmit<DiscountEntity>[] = []
    const inventories: DefaultModelOmit<InventoryEntity>[] = []
    const productCategory: DefaultModelOmit<ProductCategoryEntity>[] = []

    for (let i = 0; i < 100; i++) {
        if (faker.datatype.boolean(0.25)) discounts.push(createDiscount())
        if (faker.datatype.boolean()) productCategory.push(createProductCategory())
        inventories.push(createInventory())
    }

    const discountQuery = await DiscountModel.query().insertAndFetch(discounts)
    const iventoryQuery = await InventoryModel.query().insertAndFetch(inventories)
    const productCategoryQuery = await ProductCategoryModel.query().insertAndFetch(productCategory)

    for (let inv of iventoryQuery) {
        products.push(createProduct({
            discountId: faker.datatype.boolean(0.25) ? faker.helpers.arrayElement(discountQuery).id : undefined,
            categoryId: faker.helpers.arrayElement(productCategoryQuery).id,
            inventoryId: inv.id
        }))
    }

    await ProductModel.query().insert(products)
}
