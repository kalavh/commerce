import 'reflect-metadata'
import { settings as mixSettings } from 'ts-mixer'

mixSettings.staticsStrategy = 'proxy'

jest.mock('~/src/infra/utils/logger')

const env = {
    env: 'test',
    NODE_ENV: 'test'
}

process.env = {
    ...process.env,
    ...env,
}
