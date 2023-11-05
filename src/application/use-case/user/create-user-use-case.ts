import { injectable } from "tsyringe";
import { UserRepository } from "../../../external/database/repository/user";
import { UserEntity } from "../../../domain/entities/user";
import { DefaultCreateUseCaseType } from "../../types/default-use-case";

export type createUser = Omit<UserEntity, 'id' | 'createdAt' | 'deletedAt'>

@injectable()
export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository
    ) { }

    execute({ data, trx }: DefaultCreateUseCaseType<createUser>) {
        return this.userRepository.createUser({ data, trx })
    }
}