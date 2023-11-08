import 'reflect-metadata'
import { settings as mixSettings } from 'ts-mixer'

mixSettings.staticsStrategy = 'proxy'

const env = {
    env: 'test',
    NODE_ENV: 'test'
}

process.env = {
    ...process.env,
    ...env,
}
