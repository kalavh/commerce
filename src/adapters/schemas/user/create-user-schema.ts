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

    @IsString()
    telephone: string

    @IsString()
    mobile: string

    @IsString()
    email: string
}
