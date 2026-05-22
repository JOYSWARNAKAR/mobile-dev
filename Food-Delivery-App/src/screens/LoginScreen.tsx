import { useContext } from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } =
    useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: '#ff6b00',
          padding: 15,
          borderRadius: 10,
        }}
        onPress={login}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}