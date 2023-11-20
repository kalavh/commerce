import { UserAddressEntity } from "./user_address"

export class UserEntity {
    id: string

    username: string

    firstName: string

    lastName: string

    telephone: string

    mobile: string

    password: string

    email: string

    createdAt: Date

    updatedAt?: Date

    deletedAt?: Date

    userAddress?: UserAddressEntity
}