import { View, Text } from 'react-native';

export default function SearchScreen() {
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
        Search Screen
      </Text>
    </View>
  );
}