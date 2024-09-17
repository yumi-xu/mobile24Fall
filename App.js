import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import Header from './Components/Header';
import Input from './Components/Input';

export default function App() {
  const appName = "Welcome to My awesome app"

  const [inputData, setInputData] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputData = (data) => {
    console.log("app.js", data);
    setInputData(data);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>{appName}</Text>
      <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
      <Input autoFocus={true} inputHandler={handleInputData} visible={isModalVisible}/>
      <Text style={styles.inputText}>{inputData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    textAlign: 'center',
    borderColor: 'purple',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  inputText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
