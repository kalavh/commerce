import { UserEntity } from "../../../domain/entities/user";
import { Model } from 'objection'
import { Mixin, settings } from "ts-mixer";
settings.staticsStrategy = 'proxy';

export class UserModel extends Mixin(UserEntity, Model) {
    static get tableName() {
        return 'users'
    }
}
