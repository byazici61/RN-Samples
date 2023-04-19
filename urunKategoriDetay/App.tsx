import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigations/MainStackNavi';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux';


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    </Provider>
  );
}


