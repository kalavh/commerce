import { Transaction } from 'objection'
import { UserModel } from '../models/user'
import { DefaultCreateUseCaseType } from '../../../application/types/default-use-case'
import { UserEntity } from '../../../domain/entities/user'

export class UserRepository {
    async getUserByEmail({ email, trx }: { email: string, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .where({ email })
            .first()
    }

    async createUser({ data, trx }: DefaultCreateUseCaseType<UserEntity>) {
        return UserModel
            .query(trx)
            .insertAndFetch(data)
    }

    async login({ data, trx }: DefaultCreateUseCaseType<Partial<UserEntity>>): Promise<UserEntity> {
        return UserModel
            .query(trx)
            .where({ username: data.username })
            .first()
            .throwIfNotFound()
    }

    async findById({ id, trx }: { id: string, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .findById(id)
    }
}