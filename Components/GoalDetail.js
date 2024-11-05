import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { addWarningToGoal } from "../Firebase/firestoreHelper";
import GoalUsers from "./GoalUsers";

const GoalDetails = ({ route }) => {
  // console.log("route params are ", route.params);
  const navigation = useNavigation();

  const [isWarning, setIsWarning] = useState(() => !!route.params.goal.warning);

  const headerTitle = isWarning
    ? "Warning!"
    : route.params
      ? route.params.goal.text
      : "More Details";

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="All My Goals"
          color="#99ffff"
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <PressableButton
          componentStyle={styles.headerButton}
          pressedHandler={() => {
            setIsWarning(true);
            addWarningToGoal(route.params.goal.id, "goals");
          }}
          pressedStyle={styles.pressableStyle}
        >
          <AntDesign name="warning" size={24} color="orange" />
        </PressableButton>
      ),
      title: headerTitle,
    });
  }, [navigation, headerTitle]);

  function moreDetailHandle() {
    navigation.push("Details");
  }

  return (
    <View>
      {route.params ? (
        <Text style={isWarning && styles.warningStyle}>
          Text: {route.params.goal.text} {"\n"}
          id: {route.params.goal.id}
        </Text>
      ) : (
        <Text style={isWarning && styles.warningStyle}>More Details</Text>
      )}
      <Button title="More details" onPress={moreDetailHandle} />
      <GoalUsers id={route.params.goal.id}></GoalUsers>
    </View>
  );
};

const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
  headerButton: {
    padding: 10,
    marginRight: 10,
  },
  pressableStyle: {
    opacity: 0.5,
    backgroundColor: "#E6E6FA",
  },
});

export default GoalDetails;
