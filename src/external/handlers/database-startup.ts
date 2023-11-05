
import 'reflect-metadata'
import { DatabaseConfiguration } from '../database/configuration'

async function databaseStartup() {
    const databaseConfiguration = new DatabaseConfiguration()
    databaseConfiguration.migrate()
}

export = databaseStartup()
