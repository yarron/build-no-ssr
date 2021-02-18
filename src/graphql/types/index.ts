import { ApolloCache, InMemoryCache } from '@apollo/client';

export interface IResolverContext {
  cache: ApolloCache<InMemoryCache>;
}
