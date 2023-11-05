import { ProductModel } from '../models/product'
import { ProductEntity } from '../../../domain/entities/product'
import { DefaultCreateUseCaseType } from '../../../application/types/default-create-use-case'
import { DefaultListUseCaseType } from '../../../application/types/default-list-use-case'
import { FilterProductType } from '../../../application/types/filter-product-use-case'

export class ProductRepository {
    async insertProduct({ data, trx }: DefaultCreateUseCaseType<ProductEntity>) {
        return ProductModel
            .query(trx)
            .insertAndFetch(data)
    }

    async listProduct({ filters, pagination, trx }: DefaultListUseCaseType<FilterProductType>) {
        return ProductModel.query(trx)
            .where({ filters })
    }
}