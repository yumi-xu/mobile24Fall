import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function GoalItem({ onDelete, item }) {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("Details", { goal: item });
  };
  return (
    <View style={styles.wrap}>
      <Pressable
        // styles={styles.horizontal}
        style={({ pressed }) => [
          styles.horizontal,
          pressed && styles.pressableStyle,
        ]}
        onPress={onNavigate}
        android_ripple={{ color: "#dddddd", borderless: false }}
      >
        <Text style={styles.inputText}>{item.text}</Text>
        {/*<PressableButton title="X" onPress={onDelete} />*/}
        <PressableButton
          componentStyle={styles.deleteButton}
          pressedHandler={onDelete}
          pressedStyle={styles.pressableStyle}>
          {/*<Text style={styles.deleteText}>X</Text>*/}
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
    fontSize: 30,
    padding: 5,
    color: "purple",
    textAlign: "center",
    borderRadius: 5,
  },
  horizontal: {
    backgroundColor:"lightgrey",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
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
