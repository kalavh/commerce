import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { CategoryEntity } from "../../../domain/entities/category";
import { randomUUID } from "crypto";
settings.staticsStrategy = 'proxy';

export class CategoryModel extends Mixin(CategoryEntity, Model) {
    static get tableName() {
        return 'products_category'
    }

    $beforeInsert() {
        this.id = randomUUID()
    }
}