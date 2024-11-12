import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { auth } from "../Firebase/firebaseSetup";
import LocationManager from "./LocationManager";
import { useRoute } from "@react-navigation/native";

export default function Profile() {
  const user = auth.currentUser;
  const route = useRoute();
  const location = route.params?.location;

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>UID: {user.uid}</Text>
        </>
      ) : (
        <Text style={styles.text}>No user logged in</Text>
      )}
      {location && (
        <Text style={styles.text}>
          Selected Location: {location.latitude}, {location.longitude}
        </Text>
      )}
      <LocationManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
