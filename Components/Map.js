import React, { useState } from "react";
import { View, StyleSheet, Alert, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  const confirmLocationHandler = () => {
    if (selectedLocation) {
      navigation.navigate("Profile", { location: selectedLocation });
    } else {
      Alert.alert(
        "No location selected",
        "Please select a location by tapping on the map.",
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={selectLocationHandler}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <Button
        title="Confirm Selected Location"
        onPress={confirmLocationHandler}
        disabled={!selectedLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
