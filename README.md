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
    cd transactions_mern
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Copy `.env.example` to `.env` and update the values as needed.

4. Run Prisma migrations:
    ```sh
    npx prisma migrate dev
    ```

### Running the Application

1. Start the backend server:
    ```sh
    npm run dev
    ```

### GraphQL Endpoint

The GraphQL endpoint is available at `http://localhost:4000/graphql`.