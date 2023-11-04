import { CategoryEntity } from "./category"
import { InventoryEntity } from "./inventory"

export class UserAddressEntity {
    id: string

    userId: string

    addressLine1: string

    addressLine2: string

    city: string

    postal_code: string

    country: string

    telephone: string

    mobile: string

    createdAt: Date

    deletedAt: Date
}