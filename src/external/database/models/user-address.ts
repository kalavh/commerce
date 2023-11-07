import { Mixin, settings } from "ts-mixer";
import { Model } from 'objection'
import { UserAddressEntity } from "../../../domain/entities/user_address";
settings.staticsStrategy = 'proxy';

export class UserAddressModel extends Mixin(UserAddressEntity, Model) {
    static get tableName() {
        return 'users'
    }
}