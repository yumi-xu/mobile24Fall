import { useEffect, useState } from "react";
import { Image, View, Button, Alert } from "react-native";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getUserLocation, saveUserLocation } from "../Firebase/firestoreHelper";
import { auth } from "../Firebase/firebaseSetup";

const mapsApiKey = process.env.EXPO_PUBLIC_mapsApiKey;

const LocationManager = () => {
  const [location, setLocation] = useState(null);
  const [response, requestPermission] = Location.useForegroundPermissions();
  const navigation = useNavigation();
  const route = useRoute();

  // Fetch the saved location from Firestore on component mount
  useEffect(() => {
    const fetchSavedLocation = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.log("User is not authenticated");
        return;
      }

      const savedLocation = await getUserLocation(userId);
      if (savedLocation) {
        setLocation(savedLocation);
      }
    };

    fetchSavedLocation();
  }, []);

  // Check if route.params contains location and update the state
  useEffect(() => {
    if (route.params?.location) {
      setLocation(route.params.location);
    }
  }, [route.params?.location]);

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

  const saveLocationHandler = async () => {
    if (!location) {
      console.log("No location to save");
      return;
    }

    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.log("User is not authenticated");
        return;
      }
      await saveUserLocation(userId, location);
      Alert.alert("Success", "Location saved successfully!");
    } catch (error) {
      console.error("Failed to save location: ", error);
    }
  };

  return (
    <View>
      <Button title="Locate User" onPress={locateUserHandler} />
      <Button
        title="Let me choose on the map"
        onPress={() => navigation.navigate("Map")}
      />
      {location && (
        <>
          <Image
            style={styles.location}
            source={{
              uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
            }}
          />
          <Button title="Save Location" onPress={saveLocationHandler} />
        </>
      )}
    </View>
  );
};

const styles = {
  location: { height: 200, width: 400 },
};

export default LocationManager;
