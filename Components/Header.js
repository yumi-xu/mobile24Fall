import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//uopdate this variable to change the app name
export default function Header({ name }) {
  const { width, height } = useWindowDimensions();
  const paddingVerticalDynamic = height < 415 ? 0 : 10;
  return (
    <View>
      <Text style={[style.text, { paddingVertical: height < 415 ? 0 : 10 }]}>
        Welcome to {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
