import * as React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

function HomeScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home </Text>
    </View>
  );
}

function SearchScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search </Text>
    </View>
  );
}

function ProfileScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Search'
         screenOptions={{
          headerShown : false
         }} >
            <Tab.Screen name= 'Home' component={HomeScreen}
            options={{
              title: "Dashboard",
              tabBarLabel: "Start"
            }} />
            <Tab.Screen name= 'Search' component={SearchScreen} />
            <Tab.Screen name= 'Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
    )
}
