import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';
// import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator()

function MyStack() {
    return(
        <Stack.Navigator
        //  Apply globalStyles
        screenOptions={{
            headerShown :true,
                
                headerStyle : {
                    backgroundColor : "rgba(43, 41, 43, 0.66)",
                },
                headerTitleAlign: "center",
                headerTintColor : "orange",
                headerTitleStyle:{
                    fontWeight: "bold",
                    fontSize: 22, 
                }
        }}>
            <Stack.Screen name = 'Home' component = {HomeScreen} 
            options={{
                headerShown :true,
                title : "Dashboard",
                headerStyle : {
                    backgroundColor : "rgba(43, 41, 43, 0.66)",
                },
                headerTitleAlign: "center",
                headerTintColor : "orange",
                headerTitleStyle:{
                    fontWeight: "bold",
                    fontSize: 22, 
                }


                }} />
            <Stack.Screen name = 'Details' component = {DetailScreen} />
            <Stack.Screen name = 'Profile' component = {ProfileScreen} />

        </Stack.Navigator>
    )
}

export default function DynamicStackNavigator() {
    return (
       <NavigationContainer>

        <MyStack />

       </NavigationContainer>
    )
}











