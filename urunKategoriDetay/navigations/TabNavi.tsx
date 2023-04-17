import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UrunList from '../src/screens/AllProductListSecreen';
import React from 'react';
import CategoryList from '../src/screens/CategoryListScreen';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Metrics } from '../src/styles/Metrics';

const Tab = createBottomTabNavigator();

const TabNavi = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false ,headerStyle:{borderColor: "#A7A7A7",borderWidth:1}}}>
      <Tab.Screen
        name='Kategoriler'
        component={CategoryList}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="category" size={Metrics.measure(22)} color={"#3E22EA"} />
          ),
          title: 'Kategoriler',
          tabBarLabelStyle: { fontSize: Metrics.measure(20) },
        }}
      />
      <Tab.Screen
        name="Tum Urunler"
        component={UrunList}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="shopping-cart" size={Metrics.measure(24)} color="#3E22EA" />
          ),
          title: 'Tüm Ürünler',
          tabBarLabelStyle: { fontSize: Metrics.measure(20) },
        }} />
    </Tab.Navigator>
  );
};
export default TabNavi;