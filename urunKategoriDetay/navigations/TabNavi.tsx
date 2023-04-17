import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UrunList from '../src/screens/AllProductListSecreen';
import React from 'react';
import CategoryList from '../src/screens/CategoryListScreen';

const Tab = createBottomTabNavigator();

const TabNavi = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Kategoriler' component={CategoryList}
            />
            <Tab.Screen 
            name="Tum Urunler" 
            component={UrunList}/>
           
        </Tab.Navigator>
    );
};
export default TabNavi;