import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';

import MyOrdersScreen from '../screens/MyOrdersScreen';

import SettingsScreen from '../screens/SettingsScreen';

import HelpScreen from '../screens/HelpScreen';

import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer =
  createDrawerNavigator();

export default function ProfileDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent
          {...props}
        />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff6b00',
        },

        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Drawer.Screen
        name="My Orders"
        component={MyOrdersScreen}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
      />

      <Drawer.Screen
        name="Help"
        component={HelpScreen}
      />
    </Drawer.Navigator>
  );
}