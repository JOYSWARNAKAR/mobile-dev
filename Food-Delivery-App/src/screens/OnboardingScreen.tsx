import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function OnboardingScreen({
  navigation,
}: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Food Delivery App
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#ff6b00',
          padding: 15,
          borderRadius: 10,
        }}
        onPress={() =>
          navigation.navigate('Login')
        }
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}