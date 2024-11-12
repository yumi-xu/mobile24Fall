import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { addWarningToGoal } from "../Firebase/firestoreHelper";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase/firebaseSetup";

const GoalDetails = ({ route }) => {
  // console.log("route params are ", route.params);
  const navigation = useNavigation();

  const [isWarning, setIsWarning] = useState(() => !!route.params.goal.warning);

  const headerTitle = isWarning
    ? "Warning!"
    : route.params
      ? route.params.goal.text
      : "More Details";

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="All My Goals"
          color="#99ffff"
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <PressableButton
          componentStyle={styles.headerButton}
          pressedHandler={() => {
            setIsWarning(true);
            addWarningToGoal(route.params.goal.id, "goals");
          }}
          pressedStyle={styles.pressableStyle}
        >
          <AntDesign name="warning" size={24} color="orange" />
        </PressableButton>
      ),
      title: headerTitle,
    });
  }, [navigation, headerTitle]);

  // useEffect(() => {
  //   async function getImageUri() {
  //     try {
  //       if (route.params.goal.imageUri) {
  //         const imageRef = ref(storage, route.params.goal.imageUri);
  //         const httpsImageUri = await getDownloadURL(imageRef);
  //         console.log(httpsImageUri);
  //         setIm
  //       }
  //     catch
  //       (err)
  //       {
  //         console.log("Error getting image uri:", err);
  //       }
  //     }
  // }
  // useEffect(() => {
  //   if (route.params.goal.imageUri) {
  //     const fetchImage = async () => {
  //       try {
  //         const reference = ref(storage, route.params.goal.imageUri);
  //         const url = await getDownloadURL(reference);
  //         setImageUrl(url);
  //       } catch (error) {
  //         console.error("Error fetching image URL:", error);
  //       }
  //     };
  //     fetchImage();
  //   }
  // }, [route.params.goal.imageUri]);

  function moreDetailHandle() {
    navigation.push("Details");
  }

  return (
    <View>
      {route.params ? (
        <Text style={isWarning && styles.warningStyle}>
          Text: {route.params.goal.text} {"\n"}
          id: {route.params.goal.id}
        </Text>
      ) : (
        <Text style={isWarning && styles.warningStyle}>More Details</Text>
      )}
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      )}
      <Button title="More details" onPress={moreDetailHandle} />
      <GoalUsers id={route.params.goal.id}></GoalUsers>
    </View>
  );
};

const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
  headerButton: {
    padding: 10,
    marginRight: 10,
  },
  pressableStyle: {
    opacity: 0.5,
    backgroundColor: "#E6E6FA",
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default GoalDetails;
