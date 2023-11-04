import { Mixin } from "ts-mixer";
import { Model } from 'objection'
import { InventoryEntity } from "../../../domain/entities/inventory";

export class InventoryModel extends Mixin(InventoryEntity, Model) {
    static get tableName() {
        return 'product_invetory'
    }
}