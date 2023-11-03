import { Mixin } from "ts-mixer";
import { UserEntity } from "../../../domain/entities/user";
import { Model } from 'objection'

export class UserModel extends Mixin(UserEntity, Model) {
    static get tableName() {
        return 'users'
    }
}