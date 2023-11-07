import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { DiscountEntity } from "../../../domain/entities/discount";
settings.staticsStrategy = 'proxy';

export class DiscountModel extends Mixin(DiscountEntity, Model) {
    static get tableName() {
        return 'discount'
    }
}