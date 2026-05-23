import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({route}: any) => {

const navigation = useNavigation<any>();
const username = route?.params?.username || "Guest";

useLayoutEffect(() => {
  navigation.setOptions({
    title: "Details"
  })
}, [navigation]
)

  return (
    <View>
      <Text> {username} </Text>
       {/* <Button title = 'Go back' onPress={() => navigation.goBack()} ></Button> */}
       <Button title = 'Go to Profile' onPress={() => navigation.replace("Profile")} ></Button>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})