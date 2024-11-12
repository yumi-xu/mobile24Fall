import { useState } from "react";
import { View, Button } from "react-native";
import * as Location from "expo-location";

const LocationManager = () => {
  const [location, setLocation] = useState(null);
  const [response, requestPermission] = Location.useForegroundPermissions();

  const verifyPermission = async () => {
    if (response?.granted) {
      return true;
    }

    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  };

  const locateUserHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      console.log("Location permission not granted.");
      return;
    }
    try {
      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });
      console.log(userLocation);
    } catch (err) {
      console.log("locate user error:", err);
    }
  };

  return (
    <View>
      <Button title="Locate User" onPress={locateUserHandler} />
    </View>
  );
};

export default LocationManager;
