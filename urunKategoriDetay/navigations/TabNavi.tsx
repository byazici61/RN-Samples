import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UrunList from '../UrunList';
import React from 'react';
import useProducts from '../src/hooks/useProducts';
import { Text } from 'react-native';
const Tab = createBottomTabNavigator();


const TabNavi = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Anasayfa" component={()=>{return(<Text>{}</Text>)}}/>
            <Tab.Screen name="Katagoriler" component={UrunList}/>
        
        </Tab.Navigator>
    );
};
export default TabNavi;