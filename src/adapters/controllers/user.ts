import { JsonController, Post } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { injectable } from 'tsyringe'
import { StrictBody } from "../../external/web/validator";
import { CreateUserSchema } from "../schemas/user/create-user-schema";
import { CreateUserUseCase } from "../../application/use-case/user/create-user-use-case";

@JsonController('/user')
@injectable()
export class Health {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase
    ) { }

    @OpenAPI({
        summary: 'Create user',
        description: 'Create user'
    })

    @Post('/')
    create(@StrictBody() body: CreateUserSchema) {
        return this.createUserUseCase.execute(body)
    }
}