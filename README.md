# Novel Indo API

API for managing the `novel`, `novel_chapter`, and `comment` database using **NestJS**, **TypeORM**, and **PostgreSQL**.

## Features

- **NestJS Framework**: Built on the highly scalable and robust Node.js framework.
- **TypeORM & PostgreSQL**: Seamlessly syncs with your remote/local PostgreSQL database.
- **Swagger Documentation**: Beautiful API explorer automatically generated for all endpoints.
- **Standardized DTOs**: Payload validation for `create` and `update` endpoints.
- **Unit & E2E Testing**: Boilerplate testing setups included via Jest.

## Requirements

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/habibsyuhada/novel-indo-api.git
   cd novel-indo-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Copy `.env.example` into `.env` and fill in your PostgreSQL credentials.
   ```bash
   cp .env.example .env
   ```
   **Example `.env`**:
   ```env
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=secret
   DB_DATABASE=novel_db
   ```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Documentation (Swagger)

Once the application is running (e.g., via `npm run start:dev`), you can access the Swagger UI documentation at:

👉 **[http://localhost:3000/docs](http://localhost:3000/docs)**

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This project is [UNLICENSED](LICENSE).
