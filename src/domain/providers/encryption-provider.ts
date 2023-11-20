import bcrypt from 'bcryptjs'

export class EncryptionProvider {
    private salts = 12

    async createHash(data: string) {
        return bcrypt.hash(data, this.salts)
    }

    async verify(data: string, encrypted: string) {
        return bcrypt.compare(data, encrypted)
    }
}