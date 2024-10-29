import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <Button
        title="Log In"
        onPress={() => {
          /* Handle login */
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={{ color: "blue", marginTop: 10 }}>
          New User? Create an account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
