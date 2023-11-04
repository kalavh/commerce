
import 'reflect-metadata'
import { DatabaseConfiguration } from './configuration'

export class Startup {
    constructor(private readonly databaseConfiguration: DatabaseConfiguration) { }

    async execute() {
        await this.databaseConfiguration.migrate()
        this.databaseConfiguration.removeConnection()
    }
}
