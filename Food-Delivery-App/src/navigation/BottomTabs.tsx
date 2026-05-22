import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';

import SearchScreen from '../screens/SearchScreen';

import OrdersScreen from '../screens/OrdersScreen';

import ProfileDrawer from './ProfileDrawer';

const Tab =
  createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({
          color,
          size,
        }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (
            route.name === 'Search'
          ) {
            iconName = 'search';
          } else if (
            route.name === 'Orders'
          ) {
            iconName = 'receipt';
          } else {
            iconName = 'person';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: 2,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileDrawer}
      />
    </Tab.Navigator>
  );
}