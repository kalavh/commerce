
import 'reflect-metadata'
import { DatabaseConfiguration } from './configuration'

async function startup() {
    const databaseConfiguration = new DatabaseConfiguration()
    databaseConfiguration.migrate()
}

export = startup()
