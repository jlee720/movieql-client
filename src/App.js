import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import MovieList from './MovieList'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <MovieList />
    </ApolloProvider>
  );
}

export default App;
