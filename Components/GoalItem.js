import { View, Text, StyleSheet,Button, } from "react-native";
import React from "react";

export default function GoalItem(goalObj) {
  return (
    <View key={goalObj.key} style={styles.textWrapper}>
      <Text style={styles.inputText}>{goalObj.text}</Text>
      <Button title="X" color="red" onPress={goalObj.onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    borderRadius: 5,
    backgroundColor: "#E6E6FA",
    marginTop: 10,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 30,
    padding: 5,
    color: "black",
    textAlign: "center",
    borderRadius: 5,
  },
});