import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";

export default function Input({ autoFocus, inputHandler, visible, onCancel }) {
  const [text, setText] = useState("");
  const [showCharCount, setShowCharCount] = useState(true);
  const [message, setMessage] = useState("");
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

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
    setMessage("");
  };

  const handleConfirm = () => {
    inputHandler(text);
    setText("");
  };

  const handleCancel = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setText("");
            onCancel();
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleChangeText = (newText) => {
    setText(newText);
    setIsConfirmDisabled(newText.length < 3);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
            }}
            style={styles.image}
            alt="Network image"
          />
          <Image
            source={require("../assets/arrow.png")}
            style={styles.image}
            alt="Local image"
          />
          <TextInput
            style={styles.input}
            placeholder="Type here!"
            autoCorrect={true}
            keyboardType="default"
            value={text}
            onChangeText={handleChangeText}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoFocus={autoFocus}
          />

          {showCharCount && text.length > 0 && (
            <Text>Character Count: {text.length}</Text>
          )}

          {message.length > 0 && <Text>{message}</Text>}

          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={handleCancel} color="#1E90FF" />
            <Button
              title="Confirm"
              onPress={handleConfirm}
              disabled={isConfirmDisabled}
              color="#1E90FF"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    width: "80%",
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row", //horizontally
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  charCount: {
    fontSize: 14,
    color: "#000",
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    color: "red",
    marginBottom: 20,
  },
});
