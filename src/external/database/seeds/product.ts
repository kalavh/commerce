import { UserModel } from "../models/user";
import { logger } from "../../utils/logger";
import { UserEntity } from "../../../domain/entities/user";
import { DefaultModelOmit } from "../../../application/types/default-model-omit";

export async function seed() {
    logger.info('Start Seeeds')
    const user: DefaultModelOmit<UserEntity> = {
        username: 'admin',
        password: 'teste',
        firstName: 'Super',
        lastName: 'Admin',
        email: 'admin@admin.com',
        telephone: '40028922'
    }

    await UserModel.query()
        .insert(user)
        .debug()

}
