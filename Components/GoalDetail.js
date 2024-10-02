import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoalDetails = ({ route }) => {
  const navigation = useNavigation();
  console.log(route.params);
  function moreDetailHandle() {
    navigation.push("Details");
  }

  return (
    <View style={styles.container}>
      {route.params ? (
        <Text style={styles.detailText}>
          Text: {route.params.goal.text} id :{route.params.goal.id}
        </Text>
      ) : (
        <Text>More Details</Text>
      )}

      <Button title="More details" onPress={moreDetailHandle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  detailText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default GoalDetails;
