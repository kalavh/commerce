import { Get, JsonController } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { injectable } from 'tsyringe'
import { GetProductsUseCase } from "../../application/use-case/products/get-products-use-case";

@JsonController('/product')
@injectable()
export class Health {
    constructor(
        private readonly getProductsUseCase: GetProductsUseCase
    ) { }

    @OpenAPI({
        summary: 'List products',
        description: 'This route list products'
    })
    @Get('/')
    listProducts() {
        return this.getProductsUseCase.execute()
    }

}