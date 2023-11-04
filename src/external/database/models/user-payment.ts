import { Mixin } from "ts-mixer";
import { Model } from 'objection'
import { UserPaymentEntity } from "../../../domain/entities/user_payment";

export class UserPaymentModel extends Mixin(UserPaymentEntity, Model) {
    static get tableName() {
        return 'users'
    }
}