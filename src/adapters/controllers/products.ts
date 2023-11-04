import { Get, JsonController, Post } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { injectable } from 'tsyringe'
import { GetProductUseCase } from "../../application/use-case/products/get-product-use-case";
import { CreateProductUseCase } from "../../application/use-case/products/create-product-use-case";
import { StrictBody } from "../../external/web/validator";
import { CreateProductSchema } from "../schemas/product/create-product-schema";

@JsonController('/product')
@injectable()
export class Health {
    constructor(
        private readonly getProductUseCase: GetProductUseCase,
        private readonly createProductUseCase: CreateProductUseCase
    ) { }

    @OpenAPI({
        summary: 'List products',
        description: 'This route list products'
    })
    @Get('/:id')
    listProducts() {
        return this.getProductUseCase.execute()
    }

    @Post('/')
    create(@StrictBody() body: CreateProductSchema) {
        return this.createProductUseCase.execute(body)
    }
}