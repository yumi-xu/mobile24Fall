import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import React from "react";

//uopdate this variable to change the app name
export default function Header({ name }) {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <Text> Welcome to {name}</Text>
    </View>
  );
}
