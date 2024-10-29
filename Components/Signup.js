import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Email Address</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Text>Confirm Password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 15 }}
      />

      <Button
        title="Register"
        onPress={() => {
          /* Handle signup */
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "blue", marginTop: 10 }}>
          Already Registered? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
