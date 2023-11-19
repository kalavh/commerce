import { container } from 'tsyringe'
import { GetHealthUseCase } from './get-health-use-case'

describe('GetHealthUseCase', () => {
    test('should get health return', async () => {
        const sut = container.resolve(GetHealthUseCase)

        const result = sut.execute()

        expect(result).toEqual({ status: 'Server is running' })
    })
})
