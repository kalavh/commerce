import { join } from "path";
import settings from "../config/settings";
export = {
    type: "postgres",
    host: settings.HOST,
    port: 3306,
    username: settings.DATABASE_USER,
    password: settings.DATABASE_PASSWORD,
    database: settings.DATABASE_NAME,
    entities: [join(__dirname, './models/*')],
    migrations: [join(__dirname, './migrations/*')],
    migrationsTableName: "custom_migration_table",
}