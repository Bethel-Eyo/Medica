import React from 'react';
import Navigation from './src/navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {StatusBar} from 'react-native';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
        animated
      />
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
