import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabNavi from './navigations/TabNavi';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavi />
    </NavigationContainer>
  );
}


