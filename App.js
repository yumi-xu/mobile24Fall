import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar, FlatList, ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const appName = "Welcome to My awesome app";

  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputData = (data) => {
    const newGoal = { text: data, id: Math.random().toString() };
    //add new goals
    setGoals((currentGoals) => [...currentGoals, newGoal]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}>
        <Text style={styles.headerText}>{appName}</Text>
        <Button
          style={styles.btnAddGoal}
          title="Add a goal"
          onPress={() => setIsModalVisible(true)}
        />
      </View>

      <Input
        autoFocus={true}
        inputHandler={handleInputData}
        visible={isModalVisible}
        onCancel={handleCancel}
      />
      <View style={styles.bottomSection}>
        <FlatList contentContainerStyle={styles.contentContainer}
          data={goals}
          renderItem={(itemData) => (
            <View style={styles.textWrapper}>
              {/*<Text style={styles.inputText}>{itemData.item.text}</Text>*/}
              <GoalItem text={itemData.item.text}
                        onDelete={() => deleteGoalHandler(itemData.item.id)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  btnAddGoal: {
    color: "#1E90FF",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    borderColor: "purple",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },

  bottomSection: {
    flex: 3,
    backgroundColor: "#D8BFD8",
    justifyContent: "center",
  },

  contentContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
});
