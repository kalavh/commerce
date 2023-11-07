import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { UserPaymentEntity } from "../../../domain/entities/user_payment";
settings.staticsStrategy = 'proxy';

export class UserPaymentModel extends Mixin(UserPaymentEntity, Model) {
    static get tableName() {
        return 'users'
    }
}