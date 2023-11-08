const fs = require('fs')
const path = require('path')

const name = require('./package.json').name

const config = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.swcrc'), 'utf-8'),
)

module.exports = {
    displayName: name,
    cacheDirectory: path.resolve(__dirname, '.jest'),
    setupFilesAfterEnv: ['jest-extended/all'],
    setupFiles: ['./test/setup/set-environment.ts'],
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest', config],
    },
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
