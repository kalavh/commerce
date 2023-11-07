import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { ProductEntity } from "../../../domain/entities/product";
settings.staticsStrategy = 'proxy';

export class ProductModel extends Mixin(ProductEntity, Model) {
    static get tableName() {
        return 'product'
    }
}