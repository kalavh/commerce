import { injectable } from "tsyringe";
import { ProductRepository } from "../../../external/database/repository/product";
import { DefaultListUseCaseType } from "../../types/default-list-use-case";
import { FilterProductType } from "../../types/filter-product-use-case";

@injectable()
export class ListProductUseCase {
    constructor(private readonly productRepository: ProductRepository
    ) { }

    execute({ filters, pagination, trx }: DefaultListUseCaseType<FilterProductType>) {
        return this.productRepository.listProduct({ filters, pagination, trx })
    }
}