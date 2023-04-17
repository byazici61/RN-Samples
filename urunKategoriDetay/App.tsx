import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigations/MainStackNavi';
import React from 'react';


export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}


