import { GetProducts } from "@/src/application/use-case/products/get-products";
import { Get, JsonController } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { injectable } from 'tsyringe'

@JsonController('/product')
@injectable()
export class Health {
    constructor(
        private readonly getProducts: GetProducts
    ) { }

    @OpenAPI({
        summary: 'List products',
        description: 'This route list products'
    })
    @Get('/')
    listProducts() {
        return this.getProducts.execute()
    }

}