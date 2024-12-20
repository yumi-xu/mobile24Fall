import React, { useState } from "react";
import { View, Button, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager({ onImageTaken }) {
  const [imageUri, setImageUri] = useState(null);
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
    Alert.alert("Permission denied");
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
        const uri = result.assets[0].uri;
        console.log("Image captured:", uri);
        setImageUri(uri);
        onImageTaken(uri);
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
      //Alert.alert(err);
    }
  };

  return (
    <View>
      <Button title="Take An Image" onPress={takeImageHandler} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, marginTop: 10 }} // 设置预览图像的样式
        />
      )}
    </View>
  );
}
