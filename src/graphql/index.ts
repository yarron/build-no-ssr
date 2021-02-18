import {
  ApolloClient, ApolloLink, from, HttpLink, InMemoryCache,
} from '@apollo/client';
import { loader } from 'graphql.macro';
import cacheLocal from './cache';
import resolversLocal from './resolvers';

const cache = new InMemoryCache();
const typeDefsLocal = loader('./scheme/_client.graphql');
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL });
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    },
  }));

  return forward(operation);
});

cache.writeQuery(cacheLocal);

const client = new ApolloClient({
  cache,
  link: from([
    authMiddleware,
    httpLink,
  ]),
  connectToDevTools: true,
  typeDefs: typeDefsLocal,
  resolvers: resolversLocal,
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
