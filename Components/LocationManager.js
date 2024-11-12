import { useState } from "react";
import { Image, View, Button } from "react-native";
import * as Location from "expo-location";

const mapsApiKey = process.env.EXPO_PUBLIC_mapsApiKey;

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
      //set location
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
      {location && (
        <Image
          style={styles.location}
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
        ></Image>
      )}
    </View>
  );
};

const styles = {
  location: { height: 200, width: 400 },
};

export default LocationManager;
