const userTypeDef = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type DeleteUserResponse {
    success: Boolean!
    user: User
  }

  type Query {
    users: [User!]!
    getUserByEmail(email: String!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    deleteUser(id: ID!): DeleteUserResponse!
  }
`;

export default userTypeDef;