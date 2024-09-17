import React, { useState, useRef, useEffect } from 'react';
import { Modal, StyleSheet, View, Text, TextInput, Button} from 'react-native'

export default function Input({autoFocus, inputHandler, visible}) {
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

    const handleConfirm = () => {
        inputHandler(text);   
    };

    return (
        <Modal visible={visible} 
        animationType="slide"
        transparent={false}
        >
            <View style={styles.container}>
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

                <Button title="Confirm" onPress={handleConfirm} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
});