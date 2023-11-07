import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { CategoryEntity } from "../../../domain/entities/category";
settings.staticsStrategy = 'proxy';

export class CategoryModel extends Mixin(CategoryEntity, Model) {
    static get tableName() {
        return 'product_category'
    }
}