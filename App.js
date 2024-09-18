import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";

export default function App() {
  const appName = "Welcome to My awesome app";

  const [inputData, setInputData] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputData = (data) => {
    setInputData(data);
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
          title="Add a goal"
          onPress={() => setIsModalVisible(true)}
          color="#1E90FF"
        />
      </View>

      <Input
        autoFocus={true}
        inputHandler={handleInputData}
        visible={isModalVisible}
        onCancel={handleCancel}
      />
      <View style={styles.bottomSection}>
        {inputData.length > 0 ? (
          <View style={styles.textWrapper}>
            <Text style={styles.inputText}>{inputData}</Text>
          </View>
        ) : null}
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

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    borderColor: "purple",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },

  bottomSection: {
    flex: 4,
    backgroundColor: "#D8BFD8",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textWrapper: {
    borderRadius: 5,
    backgroundColor: "#E6E6FA",
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
  },
});
