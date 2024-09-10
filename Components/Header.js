import { View, Text } from 'react-native'
import React from 'react'

//uopdate this variable to change the app name
export default function Header({name}) {
  return (
    <View>
        {/*use the prop here*/}
      <Text>Welcome to {name}</Text>
    </View>
  )
}