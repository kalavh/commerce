import { JsonController, Post } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { injectable } from 'tsyringe'
import { Serializer, StrictBody } from "../../external/web/validator";
import { LoginSchema } from "../schemas/auth/login-schema";
import { LoginUseCase } from "../../application/use-case/user/login-use-case";
import { UserSerializer } from "../serializers/user";

@JsonController('/login')
@injectable()
export class Auth {
    constructor(
        private readonly loginUseCase: LoginUseCase
    ) { }

    @OpenAPI({
        summary: 'Create user',
        description: 'Create user'
    })
    @Post('/')
    @Serializer(UserSerializer)
    login(@StrictBody() filters: LoginSchema) {
        return this.loginUseCase.execute({ filters })
    }
}