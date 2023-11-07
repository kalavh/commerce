import { Knex } from "knex";
import { UserModel } from "../models/user";
import { logger } from "../../utils/logger";

export async function seed(knex: Knex) {
    logger.info('START SEED')
    const teste = await UserModel.query()
}