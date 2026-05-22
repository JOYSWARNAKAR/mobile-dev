import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function RestaurantDetailScreen({
  route,
  navigation,
}: any) {
  const {
    restaurantName,
    price,
    image,
  } = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: '100%',
          height: 280,
        }}
      />

      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
          }}
        >
          {restaurantName}
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
          }}
        >
          ₹{price}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#ff6b00',
            padding: 16,
            borderRadius: 10,
            marginTop: 30,
            alignItems: 'center',
          }}
          onPress={() =>
            navigation.navigate('Cart')
          }
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}