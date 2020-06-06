import React from 'react';
import { View } from 'react-native';

import Button from './components/Button';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>Entrar</Button>
    </View>
  );
};

export default App;
