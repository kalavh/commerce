import { Transaction } from 'objection'
import { UserModel } from '@/src/external/database/models/user'

export class UserRepository {
    async getUserByEmail({ email, trx }: { email: string, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .where({ email })
            .first()
    }
}