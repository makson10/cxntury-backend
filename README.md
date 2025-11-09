# cxntury-backend

A backend API for the cxntury project, built with NestJS and Sequelize (PostgreSQL).

## Key Functionality

- **Session Management** — Creates and tracks user sessions for quizzes
- **Task API** — Serves multiple-choice tasks and options via REST endpoints
- **Answer Submission** — Validates and records user answers, returns correctness
- **Database Integration** — Uses PostgreSQL with Sequelize ORM and migrations
- **Seeders & Migrations** — Easily initialize and update database schema and data
- **Configurable** — Loads environment variables for database and app config
- **Error Handling** — Robust error responses for API consumers
- **Testing** — Includes e2e and unit tests for reliability

## Deployment

This backend is deployed on **Render** and accessible at:

🔗 **https://cxntury-backend.onrender.com**

The API is publicly available for frontend and external integrations.

Note: Please note that the application may take a long time to respond (up to 30 seconds) due to backend hosting limitations (Render).

## CORS

Cross-Origin Resource Sharing (CORS) is enabled for this API to allow requests from the deployed frontend and other trusted origins. This ensures that browsers can access the backend from https://cxntury-frontend.vercel.app and other configured domains.

## Requirements

- Node.js (recommended 18+)
- PostgreSQL database
- npm (or yarn / pnpm)

## Install

From the `backend` directory:

```bash
npm install
```

## Environment Setup

Create a `.env` file with your database and app settings. Example:

```
DATABASE_URL=postgresql://dbuser:dbpassword@localhost:5432/mydatabase
```

## Available scripts

- `npm run start:dev` — start development server with hot reload
- `npm run start:prod` — start production server
- `npm run build` — compile TypeScript
- `npm run test` — run unit tests
- `npm run test:e2e` — run end-to-end tests
- `npm run db:migrate` — apply database migrations
- `npm run db:seed` — seed initial data

## Run locally

Start development server:

```bash
npm run start:dev
```

Build and start production server:

```bash
npm run build
npm run start:prod
```

## Database Migrations & Seeding

Apply migrations:

```bash
npm run db:migrate
```

Seed initial data:

```bash
npm run db:seed
```
