import { Transaction } from 'objection'
import { ProductModel } from '../models/product'
import { createProduct } from '../../../application/use-case/products/create-product-use-case'

export class ProductRepository {
    async createProduct({ product, trx }: { product: createProduct, trx?: Transaction }) {
        return ProductModel
            .query(trx)
            .insertAndFetch(product)
    }
}