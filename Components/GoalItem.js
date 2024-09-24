import { View, Text, StyleSheet, } from "react-native";
import React from "react";

export default function GoalItem(props) {
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.inputText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    borderRadius: 5,
    backgroundColor: "#E6E6FA",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
  },
  inputText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    borderRadius: 5,
  },
});