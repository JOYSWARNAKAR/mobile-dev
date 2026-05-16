import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {

const navigation = useNavigation<any>()

  return (
    <View>
      <Text>DetailScreen</Text>
       {/* <Button title = 'Go back' onPress={() => navigation.goBack()} ></Button> */}
       <Button title = 'Go to Profile' onPress={() => navigation.navigate("Profile")} ></Button>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})