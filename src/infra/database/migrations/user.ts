import {
    MigrationInterface,
    QueryRunner,
    Table,
} from "typeorm"

const tableName = 'users'

export class QuestionRefactoringTIMESTAMP implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                name: tableName,
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isUnique: true,
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "user",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName)
    }
}