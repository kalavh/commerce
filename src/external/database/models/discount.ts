import { Mixin, settings } from "ts-mixer";
import { Model, QueryContext } from 'objection'
import { DiscountEntity } from "../../../domain/entities/discount";
import { randomUUID } from "crypto";
settings.staticsStrategy = 'proxy';

export class DiscountModel extends Mixin(DiscountEntity, Model) {
    static get tableName() {
        return 'discounts'
    }
}