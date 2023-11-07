
import { DatabaseConfiguration } from '../database/configuration'
import settings from '../config/settings'
import { EnvEnum } from '../config/env-enum'
import { logger } from '../utils/logger'
import { UserModel } from '../database/models/user'

export async function databaseStartup() {
    const databaseConfiguration = new DatabaseConfiguration()

    logger.info('Startup database')
    if (settings.NODE_ENV === EnvEnum.DEV) {
        const tables = await databaseConfiguration.knexInstance()
            .raw(`select  * from pg_class t where t.relname = 'products_pkey'`)

        if (!tables.rowCount) {
            await databaseConfiguration.migrate()
            await databaseConfiguration.seed()
        }

    }
}
