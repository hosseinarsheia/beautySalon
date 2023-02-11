import React from 'react';
import RootAppNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <RootAppNavigation />
    </SafeAreaProvider>
  );
}

export default App;
