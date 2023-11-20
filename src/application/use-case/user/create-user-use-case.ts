import { injectable } from "tsyringe";
import { UserRepository } from "../../../external/database/repository/user";
import { DefaultCreateUseCaseType } from "../../types/default-use-case";
import { EncryptionProvider } from "../../../domain/providers/encryption-provider";
import { UserEntity } from "../../../domain/entities/user";
import { UserAddressRepository } from "../../../external/database/repository/user-address";
import { UserAddressEntity } from "../../../domain/entities/user_address";

type UserTypeWithAdress = UserEntity & { userAddress: UserAddressEntity }

@injectable()
export class CreateUserUseCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userAddressRepository: UserAddressRepository,
        private readonly encryptionProvider: EncryptionProvider
    ) { }

    async execute({ data, trx }: DefaultCreateUseCaseType<UserTypeWithAdress>) {
        const user = {
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            telephone: data.telephone,
            mobile: data.mobile,
            password: await this.encryptionProvider.createHash(data.password),
            email: data.email,
        }

        this.userRepository.createUser({ data: user, trx })
        this.userAddressRepository.createAddress({ data: data.userAddress, trx })
    }
}