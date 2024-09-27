# Transapp

Transapp is a simple application for managing transactions.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **GraphQL**: Query language for your API.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **@graphql-tools/merge**: Utility library to merge GraphQL type definitions and resolvers.
- **express-graphql**: Create a GraphQL HTTP server with Express.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.

### Frontend

- **Svelte**: A JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling.

### Database

- **PostgreSQL**: Open source relational database.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/lainocs/transapp.git
   cd transapp
   ```

2. Install dependencies for both backend and frontend:

   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env` in the `backend` directory and update the values as needed.

4. Run Prisma migrations:
   ```sh
   cd backend
   npx prisma migrate dev
   ```

### Running the Application

1. Start the backend server:

   ```sh
   cd backend
   npm run dev
   ```

2. Start the frontend server:
   ```sh
   cd frontend
   npm run dev
   ```

### GraphQL Endpoint

The GraphQL endpoint is available at `http://localhost:4000/graphql`.
