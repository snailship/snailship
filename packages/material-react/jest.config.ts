import type { Config } from 'jest'

const config: Config = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/interfaces.ts',
    '!src/**/demos/*',
    '!src/**/__test__/*',
  ],
  coverageReporters: ['text', 'html', 'lcovonly'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'jest-environment-jsdom',
}

export default config
