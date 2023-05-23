import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from './screens/Login'
import Home from './screens/Home';
import CalcSafra from './screens/CalcSafra';
import CalcHectare from './screens/CalcHectare';
import CalcFoliar from './screens/CalcFoliar';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"

    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='#ffa500'
            barStyle={{backgroundColor: '#141414'}}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Inicío'}}/>
            <Tab.Screen name="CalcSafra" component={CalcSafra} options={{tabBarLabel: 'Safra'}}/>
            <Tab.Screen name="CalcHectare" component={CalcHectare} options={{tabBarLabel: 'Hectare'}}/>
            <Tab.Screen name="CalcFoliar" component={CalcFoliar} options={{tabBarLabel: 'Foliar'}}/>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;