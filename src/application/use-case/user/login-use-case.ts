import { injectable } from "tsyringe";
import { UserRepository } from "../../../external/database/repository/user";
import { DefaultFilterUseCaseType } from "../../types/default-use-case";
import { LoginType } from "../../types/login-use-case";

@injectable()
export class LoginUseCase {
    constructor(private readonly userRepository: UserRepository
    ) { }

    execute({ filters, trx }: DefaultFilterUseCaseType<LoginType>) {
        return this.userRepository.login({ filters, trx })
    }
}