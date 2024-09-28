const transactionTypeDef = `#graphql
  type Transaction {
    id: ID!
    user: User!
    description: String!
    paymentType: String!
    amount: Float!
  }

  type DeleteTransactionResponse {
    success: Boolean!
    transaction: Transaction
  }

  type Query {
    transactions: [Transaction!]!
    transaction(id: ID!): Transaction
  }

  type Mutation {
    createTransaction(userId: ID!, description: String!, paymentType: String!, amount: Float!): Transaction!
    deleteTransaction(id: ID!): DeleteTransactionResponse!
  }
`;

export default transactionTypeDef;