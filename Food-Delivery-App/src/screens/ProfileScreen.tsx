import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
        }}
      >
        Profile Screen
      </Text>
    </View>
  );
}