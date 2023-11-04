import { CategoryEntity } from "./category"
import { InventoryEntity } from "./inventory"

export class ProductEntity {
    id: string

    name: string

    descr: string

    categoryId: string

    inventoryId: string

    price: number

    sku: string

    discountId: number

    createdAt: Date

    deletedAt: Date

    category?: CategoryEntity

    inventory?: InventoryEntity
}