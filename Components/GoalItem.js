import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GoalItem({ onDelete, item }) {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("Details", { goal: item });
  };
  return (
    <Pressable
      onPress={onNavigate}
      android_ripple={{ color: "#dddddd", borderless: false }}
    >
      <View style={styles.wrap}>
        <View style={styles.textWrapper}>
          <Text style={styles.inputText}>{item.text}</Text>
          <Button title="X" color="red" onPress={onDelete} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: 600,
    alignItems: "center",
  },
  textWrapper: {
    borderRadius: 5,
    backgroundColor: "#E6E6FA",
    marginVertical: 10,
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
