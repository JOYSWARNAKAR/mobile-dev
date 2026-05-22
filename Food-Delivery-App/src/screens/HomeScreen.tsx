import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { restaurants } from '../data/restaurants';

export default function HomeScreen({
  navigation,
}: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
      }}
    >
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 14,
              overflow: 'hidden',
              marginBottom: 18,
              elevation: 3,
            }}
            onPress={() =>
              navigation.navigate(
                'RestaurantDetail',
                {
                  restaurantName:
                    item.name,

                  price: item.price,

                  image: item.image,
                }
              )
            }
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: '100%',
                height: 180,
              }}
            />

            <View
              style={{
                padding: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {item.name}
              </Text>

              <Text
                style={{
                  marginTop: 5,
                  color: '#666',
                }}
              >
                Starting From ₹
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}