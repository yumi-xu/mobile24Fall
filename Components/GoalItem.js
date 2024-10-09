import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function GoalItem({ onDelete, item, onPressIn, onPressOut }) {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("Details", { goal: item });
  };

  //long-press delete confirmation
  const handleLongPress = () => {
    Alert.alert(
      "Delete Goal",
      "Are you sure you want to delete this goal?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: onDelete },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={styles.wrap}>
      <Pressable
        style={({ pressed }) => [
          styles.horizontal,
          pressed && styles.pressableStyle,
        ]}
        onPress={onNavigate}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={handleLongPress}
        android_ripple={{ color: "#dddddd", borderless: false }}
      >
        <Text style={styles.inputText}>{item.text}</Text>
        <PressableButton
          componentStyle={styles.deleteButton}
          pressedHandler={onDelete}
          pressedStyle={styles.pressableStyle}
        >
          <AntDesign name="delete" size={24} color="black" />
        </PressableButton>
      </Pressable>
    </View>
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
    flex: 1,
    fontSize: 30,
    padding: 5,
    color: "purple",
    textAlign: "left",
  },
  horizontal: {
    width: 200,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  pressableStyle: {
    opacity: 0.5,
    backgroundColor: "#E6E6FA",
  },
  deleteButton: {
    backgroundColor: "grey",
  },
  deleteText: {
    color: "white",
    fontSize: 20,
  },
});
