import { Knex } from "knex";
import { UserModel } from "../models/user";
import { logger } from "../../utils/logger";
import { hasMixin } from "ts-mixer";
import { UserEntity } from "../../../domain/entities/user";
import { Model } from "objection";

export async function seed(knex: Knex) {
    /*     const teste = await UserModel.query()
            .insert({
                password: 'teste'
            })
     */
}
