import { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../context/AuthContext';

import AuthNavigator from './AuthNavigator';

import BottomTabs from './BottomTabs';

const Stack =
  createNativeStackNavigator();

export default function RootNavigator() {
  const { userToken } =
    useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {userToken ? (
        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
        />
      )}
    </Stack.Navigator>
  );
}