import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';

import CartScreen from '../screens/CartScreen';

const Stack =
  createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',

        headerStyle: {
          backgroundColor: '#ff6b00',
        },

        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Restaurants',
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={
          RestaurantDetailScreen
        }
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
}