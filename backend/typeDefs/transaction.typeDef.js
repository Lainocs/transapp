const transactionTypeDef = `#graphql
  type Transaction {
    _id: ID!
    user: User!
    description: String!
    paymentType: String!
    amount: Float!
  }

  type Query {
    transactions: [Transaction!]
  }

  type Mutation {
    createTransaction(userId: Int!, description: String!, paymentType: String!, amount: Float!): Transaction!
  }
`;

export default transactionTypeDef;