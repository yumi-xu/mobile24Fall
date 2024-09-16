import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput} from 'react-native'

export default function Input({autoFocus}) {
    const [text, setText] = useState('');
    const [showCharCount, setShowCharCount] = useState(true);  
    const [message, setMessage] = useState('');

    //lose focus
    const handleBlur = () => {
        setShowCharCount(false);
        if (text.length >= 3) {
          setMessage("Thank you");
        } else {
          setMessage("Please type more than 3 characters");
        }
      };

    //gain focus
    const handleFocus = () => {
        setShowCharCount(true);  
        setMessage('');  
    };
    return (
        <View>
            <TextInput
                style={{borderBottomColor: "purple", borderBottomWidth:2}}
                placeholder="Type here!"
                autoCorrect={true}
                keyboardType="default"
                value={text}
                onChangeText={newText=>setText(newText)} 
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoFocus={autoFocus}
            />
        
            {showCharCount && text.length > 0 && (
                <Text>
                Character Count: {text.length}
                </Text>
            )}

            {message.length > 0 && (
                <Text>
                {message}
                </Text>
            )}
        </View>
    )
}