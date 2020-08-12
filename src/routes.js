import React from 'react';
// import container
import {NavigationContainer} from '@react-navigation/native';
// import o navigator
import {createStackNavigator} from '@react-navigation/stack';
// paginas
import Incidents from './pages/Incidents';
import Details from './pages/Details';
// init o stackNavigator
const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false
            }}>
            <AppStack.Screen name="Incidents" component={Incidents}/>
            <AppStack.Screen name="Detail" component={Details}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}