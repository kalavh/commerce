import { injectable } from "tsyringe";
import { ProductEntity } from "../../../domain/entities/product";
import { ProductRepository } from "../../../external/database/repository/product";
import { Transaction } from "objection";

export type createProduct = RequiredFieldsOnly<Omit<ProductEntity, 'id' | 'createdAt' | 'deletedAt'>>

@injectable()
export class CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository
    ) { }

    execute(product: createProduct, trx?: Transaction) {
        return this.productRepository.createProduct({ product, trx })
    }
}