import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { auth } from "../Firebase/firebaseSetup";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    try {
      if (
        email.length === 0 ||
        password.length === 0 ||
        confirmPassword.length === 0
      ) {
        Alert.alert("All fields should be provided!");
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert("Error", "password and confirm password do not match!");
        return;
      }

      //add some more regex for email

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      Alert.alert("Success", "User registered successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        secureTextEntry
        style={styles.input}
      />

      <Button title="Register" onPress={handleSignup} />

      <Button
        title="Already Registered? Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    width: "90%",
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#6200ee",
    marginTop: 10,
    fontSize: 16,
  },
});
