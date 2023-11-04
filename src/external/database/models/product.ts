import { Mixin } from "ts-mixer";
import { Model } from 'objection'
import { ProductEntity } from "../../../domain/entities/product";

export class ProductModel extends Mixin(ProductEntity, Model) {
    static get tableName() {
        return 'product'
    }
}