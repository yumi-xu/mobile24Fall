import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}>
        <Text style={styles.headerText}>{appName}</Text>
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} color="#1E90FF" />
      </View>
    
      <Input autoFocus={true} inputHandler={handleInputData} visible={isModalVisible}/>
      <View style={styles.bottomSection}>
        <Text style={styles.inputText}>{inputData}</Text>
      </View>    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  topSection: {
    flex: 1, // 占屏幕的 1/5
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    borderColor: 'purple',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },

  bottomSection: {
    flex: 4, // 占屏幕的 4/5
    backgroundColor: '#D8BFD8', // 调整成类似的浅紫色
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText: {
    fontSize: 16,
    color: 'blue', // 与第二张图片的颜色一致
    textAlign: 'center',
    paddingTop: 20,
  },
});
