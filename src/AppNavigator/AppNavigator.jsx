import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            // title: 'My home',headerShown: false 
            />
            <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ title: 'Detail' }}
            />
        </Stack.Navigator>
    )
};

export default AppNavigator;

//initialRouteName="RepositoryList" screenOptions={{
//     headerStyle: {
//         backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         fontWeight: 'bold',
//     },
// }}