const fs = require('fs')
const path = require('path')

const TSConfigJest = require('tsconfig-paths-jest')

const name = require('./package.json').name
const tsconfig = require('./tsconfig.json')

const moduleNameMapper = TSConfigJest(tsconfig)

const config = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.swcrc'), 'utf-8'),
)

module.exports = {
    displayName: name,
    cacheDirectory: path.resolve(__dirname, '.jest'),
    setupFilesAfterEnv: ['jest-extended/all'],
    setupFiles: ['./tests/setup/set-environment.ts'],
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest', config],
    },
    moduleNameMapper,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/domain/**',
        '!<rootDir>/src/external/**',
        '!<rootDir>/src/domain/enums/*.ts',
        '!<rootDir>/src/external/database/repository/**',
    ],
    testMatch: ['<rootDir>/src/**/?(*.)+(spec).[jt]s?(x)'],
    coverageReporters: ['json-summary', 'text'],
}
