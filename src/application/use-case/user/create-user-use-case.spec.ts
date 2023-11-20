import { container } from 'tsyringe'
import { AuthUseCase } from './auth-use-case'
import { startDb } from '../../../../test/setup/teste-db'
import { UnauthorizedError } from 'routing-controllers'

describe('CreateUserUseCase', () => {
    test('Get rejected if not found user', async () => {
        /* await startDb()

        expect(sut.execute({ data })).rejects.toThrow(UnauthorizedError) */
    })
})
