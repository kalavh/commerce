import { Transaction } from 'objection'
import { UserModel } from '../models/user'
import { createUser } from '../../../application/use-case/user/create-user-use-case'

export class UserRepository {
    async getUserByEmail({ email, trx }: { email: string, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .where({ email })
            .first()
    }

    async createUser({ user, trx }: { user: createUser, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .insertAndFetch(user)
    }
}