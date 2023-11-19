import { randomUUID } from "crypto";
import { UserEntity } from "../../../domain/entities/user";
import { Model } from 'objection'
import { Mixin, settings } from "ts-mixer";
settings.staticsStrategy = 'proxy';

export class UserModel extends Mixin(Model, UserEntity) {
    static get tableName() {
        return 'users'
    }

    $beforeInsert() {
        this.id = randomUUID()
    }
}
