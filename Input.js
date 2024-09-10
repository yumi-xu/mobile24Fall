import { View, Text, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Input() {
    const [text, setText] = useState('');
  return (
    <TextInput
        style={{borderBottomColor: "purple", borderBottomWidth:2}}
        placeholder="Type here!"
        autoCorrect={true}
        keyboardType="default"
        value={text}
        onChangeText={newText=>setText(newText)} 
      />
  )
}