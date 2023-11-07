import { IsNumber, IsString, IsUUID } from "class-validator"

export class CreateUserSchema {
    @IsString()
    username: string

    @IsString()
    firstName: string

    @IsUUID()
    lastName: string

    @IsUUID()
    password: string

    @IsNumber()
    telephone: string

    @IsString()
    email: string

    @IsNumber()
    discountId: number
}
