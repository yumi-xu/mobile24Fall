import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoalDetails = ({ route }) => {
  console.log(route.params);
  const navigation = useNavigation();

  const [isWarning, setIsWarning] = useState(false);

  const headerTitle = isWarning ? "Warning!" : route.params.goal.text;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Warning"
          color="#ff3333"
          onPress={() => {
            setIsWarning(true);
          }}
        />
      ),
      title: headerTitle,
    });
  }, [navigation, headerTitle]);

  function moreDetailHandle() {
    navigation.push("Details");
  }

  return (
    <View style={styles.container}>
      {route.params.goal ? (
        <Text
          style={
            isWarning
              ? [styles.detailText, styles.warningText]
              : styles.detailText
          }
        >
          Text: {route.params.goal.text} {"\n"}
          id: {route.params.goal.id}
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
    color: "#000000",
  },
  warningText: {
    color: "#ff0000",
  },
});

export default GoalDetails;
