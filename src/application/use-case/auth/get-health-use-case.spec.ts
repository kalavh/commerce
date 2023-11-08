import { container } from 'tsyringe'


import { startDb } from '../../../../test/setup/teste-db'
import { GetHealthUseCase } from './get-health-use-case'

describe('GetHealthUseCase', () => {
    test('should get health return', async () => {
        const sut = container.resolve(GetHealthUseCase)

        const result = await sut.execute()

        expect(result).toBe({ status: 'Server is running' })
    })
})
