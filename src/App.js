import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import MovieList from './MovieList'
import './App.css'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <MovieList />
    </ApolloProvider>
  );
}

export default App;
