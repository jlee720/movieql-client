import { ApolloClient, InMemoryCache, HttpLink} from 'apollo-boost';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
});
const apolloClient = new ApolloClient({
  cache: cache,
  link: link
});

export default apolloClient;