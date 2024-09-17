import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Header from './Components/Header';
import Input from './Components/Input';

export default function App() {
  const appName = "My app!"

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
      <Header name={appName}/>
      <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
      <Input autoFocus={true} inputHandler={handleInputData} visible={isModalVisible}/>
      <Text>Input data: {inputData}</Text>
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
});
