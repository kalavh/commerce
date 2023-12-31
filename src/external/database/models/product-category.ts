import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { ProductEntity } from "../../../domain/entities/product";
import { randomUUID } from "crypto";
settings.staticsStrategy = 'proxy';

export class ProductCategoryModel extends Mixin(ProductEntity, Model) {
    static get tableName() {
        return 'products_category'
    }

    $beforeInsert() {
        if (!this.id) {
            this.id = randomUUID()
        }
    }
}