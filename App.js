
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Counter from './features/counter/Counter';

const App = () => {
    return(
      <View style={{flex:1,justifyContent:'center'}}>
        <Counter />
      </View>
    );
}
export default App;
