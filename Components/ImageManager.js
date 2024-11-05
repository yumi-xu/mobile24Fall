import React from "react";
import { View, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
  const [response, requestPermission] = ImagePicker.useCameraPermissions();
  console.log(response);

  async function verifyPermission() {
    try {
      if (response?.status === "granted") {
        return true;
      }
      // 请求权限
      const newPermission = await requestPermission();
      return newPermission.granted;
    } catch (err) {}
    console.log(err);
    Alert.alert("11111Permission denied");
  }

  const takeImageHandler = async () => {
    try {
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert("You do not have permission for camera");
        return;
      }

      // Launch the camera
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });

      // Check if the image was taken or the action was canceled
      if (!result.canceled) {
        console.log("Image captured:", result.assets[0].uri);
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
      //Alert.alert(err);
    }
  };

  return (
    <View>
      <Button title="Take An Image" onPress={takeImageHandler} />
      <Image />
    </View>
  );
}
