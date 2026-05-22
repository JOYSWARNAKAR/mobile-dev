import { useContext } from 'react';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  View,
  Text,
  Image,
} from 'react-native';

import { AuthContext } from '../context/AuthContext';

export default function CustomDrawerContent(
  props: any
) {
  const { logout } =
    useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150',
          }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
          }}
        />

        <Text
          style={{
            marginTop: 12,
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Joy
        </Text>

        <Text
          style={{
            color: '#666',
            marginTop: 4,
          }}
        >
          Food Lover 🍔
        </Text>
      </View>

      <DrawerItem
        label="My Orders"
        onPress={() =>
          props.navigation.navigate(
            'My Orders'
          )
        }
      />

      <DrawerItem
        label="Settings"
        onPress={() =>
          props.navigation.navigate(
            'Settings'
          )
        }
      />

      <DrawerItem
        label="Help"
        onPress={() =>
          props.navigation.navigate(
            'Help'
          )
        }
      />

      <DrawerItem
        label="Logout"
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
}