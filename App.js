import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';
import { useState } from 'react';

export default function App() {
  const appName = "My app!"
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName}/>
      <TextInput
        style={{borderBottomColor: "purple", borderBottomWidth:2}}
        placeholder="Type here!"
        autoCorrect={true}
        keyboardType="default"
        value={text}
        onChangeText={newText=>setText(newText)}
      />
      <Text>{text}</Text>
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
