import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Login from './screens/Login'
import Home from './screens/Home';
import CalcSafra from './screens/CalcSafra';
import CalcHectare from './screens/CalcHectare';
import CalcFoliar from './screens/CalcFoliar';
import LocationPermissionScreen from './screens/LocalConfirm';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"

    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='#ffa500'
            barStyle={{ backgroundColor: '#141414' }}
            inactiveColor='#656565'
        >
            <Tab.Screen
                name="home" component={Home}
                options={{ 
                    tabBarLabel: 'Inicío',
                    tabBarIcon: ({color}) => (
                        <Icon name="home" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="calcSafra"
                component={CalcSafra}
                options={{ 
                    tabBarLabel: 'Safra',
                    tabBarIcon: ({color}) => (
                        <Icon name="equalizer" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="calcHectare"
                component={CalcHectare}
                options={{ 
                    tabBarLabel: 'Hectare',
                    tabBarIcon: ({color}) => (
                        <Icon name="terrain" size={30} color={color} />
                    ) 
                }}
            />
            <Tab.Screen
                name="calcFoliar"
                component={CalcFoliar}
                options={{ 
                    tabBarLabel: 'Foliar',
                    tabBarIcon: ({color}) => (
                        <Icon name="eco" size={30} color={color} />
                    ) 
                }}
            />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="CalcSafra" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="CalcHectare" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="CalcFoliar" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="LocationPermissionScreen" component={LocationPermissionScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;