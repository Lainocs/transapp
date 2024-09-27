import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDefs/index.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';

// GraphQL schema
const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));