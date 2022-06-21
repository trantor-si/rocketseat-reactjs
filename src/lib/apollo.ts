import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient ({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nu95lx0o2801ywdz76eja0/master',
  cache: new InMemoryCache()
})