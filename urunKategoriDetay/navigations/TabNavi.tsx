import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UrunList from '../src/screens/AllProductListSecreen';
import React from 'react';
import CategoryList from '../src/screens/CategoryListScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const TabNavi = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Kategoriler' component={CategoryList}
            options={{
                tabBarIcon: () => (
                  <MaterialIcons name="category" size={22} color={"#3E22EA"} />
                ),
              }}/>
            <Tab.Screen 
            name="Tum Urunler" 
            component={UrunList}
            options={{
                tabBarIcon: () => (
                    <FontAwesome name="shopping-cart" size={24} color="#3E22EA" />
                ),
              }}/>
           
        </Tab.Navigator>
    );
};
export default TabNavi;