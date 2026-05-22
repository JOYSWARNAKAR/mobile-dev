import 'react-native-reanimated';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';

import { AuthProvider } from './src/context/AuthContext';

import linking from './src/navigation/linking';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}