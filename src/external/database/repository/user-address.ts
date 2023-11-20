import { Transaction } from 'objection'
import { UserModel } from '../models/user'
import { DefaultCreateUseCaseType } from '../../../application/types/default-use-case'
import { UserAddressModel } from '../models/user-address'
import { UserAddressEntity } from '../../../domain/entities/user_address'

export class UserAddressRepository {
    async getUserByEmail({ email, trx }: { email: string, trx?: Transaction }) {
        return UserModel
            .query(trx)
            .where({ email })
            .first()
    }

    async createAddress({ data, trx }: DefaultCreateUseCaseType<UserAddressEntity>) {
        return UserAddressModel
            .query(trx)
            .insertAndFetch(data)
    }

}