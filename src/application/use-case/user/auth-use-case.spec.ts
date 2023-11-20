import { container } from 'tsyringe'
import { AuthUseCase } from './auth-use-case'

describe('AuthUseCase', () => {
    test('Get auth use case', async () => {
        const sut = container.resolve(AuthUseCase)

        const result = 't' //sut.execute()

        expect(result).toEqual({ status: 'Server is running' })
    })
})
