import { injectable } from "tsyringe";
import { Transaction } from "objection";
import { UserRepository } from "../../../external/database/repository/user";
import { UserEntity } from "../../../domain/entities/user";

export type createUser = Omit<UserEntity, 'id' | 'createdAt' | 'deletedAt'>

@injectable()
export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository
    ) { }

    execute(user: createUser, trx?: Transaction) {
        return this.userRepository.createUser({ user, trx })
    }
}