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
import ImageManager from "./ImageManager";

export default function Input({ autoFocus, inputHandler, visible, onCancel }) {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  const isTextValid = text.length > 0;
  const [imageUri, setImageUri] = useState("");

  const handleImageTaken = (uri) => {
    console.log("input get the image url" + uri);
    setImageUri(uri);
  };

  const handleConfirm = () => {
    setText("");
    if (text.length >= 3) {
      inputHandler({ text, imageUri });
      setText("");
      setImageUri(null);
    } else {
      Alert.alert(
        "Invalid Input",
        "Please type more than 3 characters",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: true },
      );
    }
  };

  const handleCancel = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setText("");
            onCancel();
          },
        },
      ],
      { cancelable: true },
    );
  };

  const handleChangeText = (newText) => {
    setText(newText);
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
            alt="Network image" //The text that's read by the screen reader when the user interacts with the image.
          />
          <Image
            source={require("../assets/arrow.png")}
            style={styles.image}
            alt="Local image" //The text that's read by the screen reader when the user interacts with the image.
          />
          <TextInput
            style={styles.input}
            placeholder="Type something"
            autoCorrect={true}
            keyboardType="default"
            value={text}
            onChangeText={handleChangeText}
            onBlur={() => {
              setBlur(true);
            }}
            onFocus={() => {
              setBlur(false);
            }}
            autoFocus={autoFocus}
          />

          {blur ? (
            text.length >= 3 ? (
              <Text>Thank you</Text>
            ) : (
              <Text>Please type more than 3 characters</Text>
            )
          ) : (
            text && <Text>Character Count: {text.length}</Text>
          )}

          <ImageManager onImageTaken={handleImageTaken} />

          <View style={styles.buttonContainer}>
            <Button
              title="Cancel"
              onPress={handleCancel}
              style={styles.button}
            />
            <Button
              title="Confirm"
              onPress={handleConfirm}
              disabled={!isTextValid}
              style={styles.button}
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
    padding: 20,
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    width: "70%",
    padding: 10,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row", //horizontally
    justifyContent: "space-between",
    width: "60%",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
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
  button: {
    color: "#1E90FF",
  },
});
