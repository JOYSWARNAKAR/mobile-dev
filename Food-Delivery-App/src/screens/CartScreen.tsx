import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function CartScreen({
  navigation,
}: any) {
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
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Cart Screen
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#ff6b00',
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: 25,
        }}
        onPress={() =>
          navigation.replace(
            'HomeScreen'
          )
        }
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          Back To Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}