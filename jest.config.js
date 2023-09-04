/** @type {import('jest').Config} */
const config = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@domain/(.*)": "<rootDir>/src/api/domain/$1",
  },
}

module.exports = config
