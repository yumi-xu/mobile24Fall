import React, { useState} from 'react';
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
            <View style={styles.modalContent}>
                <TextInput
                    style={styles.input}
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
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,  // For Android shadow
    },
    input: {
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    width: '80%',
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    },
    charCount: {
    fontSize: 14,
    color: '#000',
    marginVertical: 10,
    },
    message: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
    },
    buttonContainer: {
    width: '30%',
    margin: 10,
    },
});