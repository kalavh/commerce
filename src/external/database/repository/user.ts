import { Transaction } from 'objection'
import { UserModel } from '../models/user'
import { createUser } from '../../../application/use-case/user/create-user-use-case'
import { LoginType } from '../../../application/types/login-use-case'
import { DefaultCreateUseCaseType, DefaultFilterUseCaseType } from '../../../application/types/default-use-case'
import { UserEntity } from '../../../domain/entities/user'

export class UserRepository {
    async getUserByEmail({ email, trx }: { email: string, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .where({ email })
            .first()
    }

    async createUser({ data, trx }: DefaultCreateUseCaseType<createUser>) {
        return UserModel
            .query(trx)
            .insertAndFetch(data)
    }

    async login({ filters, trx }: DefaultFilterUseCaseType<Partial<UserEntity>>) {
        return UserModel
            .query(trx)
            .where(filters)
            .first()
    }
}