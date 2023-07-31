import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import Feed from "../screens/Feed";
import Ionicons from "react-native-vector-icons/Ionicons";
import CreateRecetas from "../screens/CreateRecetas";
import Pantalla3 from '../screens/pantalla3';
import Pantalla4 from '../screens/pantalla4';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Índice') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CrearRecetas') {
                        iconName = focused ? 'create' : 'create-outline';
                    }else if (route.name === 'Pantalla3') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    }else if (route.name === 'Pantalla4') {
                        iconName = focused ? 'beer' : 'beer-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
                activeTintColor={'tomato'}
                inactiveTintColor={'gray'}
            
        >
            <Tab.Screen name="Índice" component={Feed} options={{headerShown:false}}/>
            <Tab.Screen name="CrearRecetas" component={CreateRecetas} options={{headerShown:false}}/>
            <Tab.Screen name="Pantalla3" component={Pantalla3} options={{headerShown:false}}/>
            <Tab.Screen name="Pantalla4" component={Pantalla4} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator
