import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const PressableButton = ({
  children,
  onPress,
  componentStyle,
  pressedHandler,
  pressedStyle,
}) => {
  return (
    <Pressable
      onPress={pressedHandler}
      style={({ pressed }) => [
        styles.defaultStyle,
        componentStyle,
        pressed && pressedStyle,
      ]}
    >
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultStyle: { backgroundColor: "white" , padding:5, borderRadius: 5},
  button: {
    backgroundColor: "#ff6666",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PressableButton;
