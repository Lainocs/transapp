import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDefs/index.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

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

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Now browse to ${process.env.GRAPHQL_URL}`));