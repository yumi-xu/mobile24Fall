import React from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import * as Notifications from "expo-notifications";

export default function NotificationManager() {
  const verifyPermission = async () => {
    const settings = await Notifications.getPermissionsAsync();
    if (!settings.granted) {
      const result = await Notifications.requestPermissionsAsync();
      return result.granted;
    }
    return true;
  };

  const scheduleNotificationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      Alert.alert(
        "Permission Required",
        "Notification permissions are not granted.",
      );
      return;
    }

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Reminder",
          body: "This is your scheduled notification!",
        },
        trigger: {
          seconds: 3, // Notification will trigger after 5 seconds
        },
      });
      //Alert.alert("Notification Scheduled", "Your notification has been set.");
    } catch (err) {
      Alert.alert("Error", "Failed to schedule notification.");
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Set Reminder" onPress={scheduleNotificationHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
});
