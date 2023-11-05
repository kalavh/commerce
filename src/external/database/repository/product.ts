import { ProductModel } from '../models/product'
import { ProductEntity } from '../../../domain/entities/product'
import { DefaultCreateUseCaseType } from '../../../application/types/default-create-use-case'

export class ProductRepository {
    async insertProduct({ data, trx }: DefaultCreateUseCaseType<ProductEntity>) {
        return ProductModel
            .query(trx)
            .insertAndFetch(data)
    }
}