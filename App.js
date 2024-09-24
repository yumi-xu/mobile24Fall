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
              <Text style={styles.inputText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/*<View style={styles.bottomSection}>*/}
      {/*  <ScrollView contentContainerStyle={styles.contentContainer}>*/}
      {/*    {goals.map((goal) => (*/}
      {/*      <View style={styles.textWrapper} key={goal.id}>*/}
      {/*        <Text style={styles.inputText}>{goal.text}</Text>*/}
      {/*      </View>*/}
      {/*    ))}*/}
      {/*  </ScrollView>*/}
      {/*</View>*/}
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
    borderRadius: 5
  },
});
