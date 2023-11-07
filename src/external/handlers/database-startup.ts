
import { DatabaseConfiguration } from '../database/configuration'
import settings from '../config/settings'
import { EnvEnum } from '../config/env-enum'
import { logger } from '../utils/logger'

export async function databaseStartup() {
    const databaseConfiguration = new DatabaseConfiguration()

    logger.info('Startup database')
    await databaseConfiguration.migrate()
    await databaseConfiguration.seed()
}
