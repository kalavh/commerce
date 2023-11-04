import { Mixin } from "ts-mixer";
import { Model } from 'objection'
import { DiscountEntity } from "../../../domain/entities/discount";

export class DiscountModel extends Mixin(DiscountEntity, Model) {
    static get tableName() {
        return 'discount'
    }
}