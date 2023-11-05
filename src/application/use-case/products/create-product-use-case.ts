import { injectable } from "tsyringe";
import { ProductRepository } from "../../../external/database/repository/product";
import { ProductEntity } from "../../../domain/entities/product";
import { DefaultCreateUseCaseType } from "../../types/default-use-case";

@injectable()
export class CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository
    ) { }

    execute({ data, trx }: DefaultCreateUseCaseType<ProductEntity>) {
        return this.productRepository.insertProduct({ data, trx })
    }
}