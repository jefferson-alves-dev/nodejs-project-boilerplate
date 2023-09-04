# NodeJS Project Boilerplate

A boilerplate setup for NodeJS projects to kickstart development with best practices in mind.

## Features

- **TypeScript Support**: Develop with strong typing using TypeScript.
- **Testing**: Comprehensive testing setup using Jest.
- **Linting**: ESLint and Prettier configured for consistent coding style.
- **Automatic Restarts**: Uses Nodemon for automatic restarts during development.
- **Git Hooks**: Uses Husky and `git-commit-msg-linter` for ensuring quality commits.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start development server with `npm run start:dev`.

## Scripts

- `npm run start:dev`: Start the development server.
- `npm test`: Run all tests.
- `npm run test:unit`: Run unit tests.
- `npm run test:integration`: Run integration tests.
- `npm run test:clearcache`: Clear Jest cache.
- `npm run test:verbose`: Run tests with verbose output.
- `npm run test:staged`: Run tests for staged files.
- `npm run test:ci`: Run tests in CI with coverage.
- `npm run husky:prepare`: Set up Husky for git hooks.

## Directory Structure

- `src/`: Contains the main source code.
  - `api/`: Contains API endpoint definitions and logic.

## Author

Jefferson Alves

## License

MIT License
