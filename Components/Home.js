import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { database } from "../Firebase/firebaseSetup";
import {
  deleteAllFromDB,
  deleteFromDB,
  writeToDB,
} from "../Firebase/firestoreHelper";
import { collection, onSnapshot } from "firebase/firestore";

export default function Home() {
  const appName = "Welcome to My awesome app";

  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "goals"),
      (querySnapshot) => {
        const newArray = [];
        querySnapshot.forEach((docSnapshot) => {
          newArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
        });
        setGoals(newArray);
      },
    );
    // Cleanup function to detach the listener
    return () => {
      unsubscribe();
    };
  }, []);

  const handleInputData = (data) => {
    // const newGoal = { text: data, id: Math.random().toString() };
    const newGoal = { text: data };
    //add new goals
    writeToDB(newGoal, "goals");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteGoalHandler = (deleteId) => {
    deleteFromDB(deleteId, "goals");
  };

  const deleteAllGoalsHandler = () => {
    Alert.alert("Delete All", "Are you sure you want to delete all goals?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => deleteAllFromDB("goals"),
      },
    ]);
  };

  // Separator component with color change functionality
  const renderSeparator = ({ highlighted }) => {
    return (
      <View
        style={[
          styles.separator,
          { backgroundColor: highlighted ? "purple" : "grey" },
        ]}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}>
        <Text style={styles.headerText}>{appName}</Text>
        <PressableButton
          pressedHandler={function () {
            setIsModalVisible(true);
          }}
          componentStyle={styles.addButton}
          pressedStyle={styles.pressableStyle}
        >
          <Text style={styles.buttonText}>Add a Goal</Text>
        </PressableButton>
      </View>

      <Input
        autoFocus={true}
        inputHandler={handleInputData}
        visible={isModalVisible}
        onCancel={handleCancel}
      />
      <View style={styles.bottomSection}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={goals}
          ListHeaderComponent={() =>
            goals.length > 0 ? (
              <Text style={styles.goalsHeaderText}>My goals</Text>
            ) : null
          }
          ListEmptyComponent={() => (
            <Text style={styles.goalsHeaderText}>No goals to show</Text>
          )}
          renderItem={({ item, index, separators }) => (
            <GoalItem
              item={item}
              onDelete={() => deleteGoalHandler(item.id)}
              onPressIn={() => separators.highlight()}
              onPressOut={() => separators.unhighlight()}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={() =>
            goals.length > 0 ? (
              <Button title="Delete all" onPress={deleteAllGoalsHandler} />
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  btnAddGoal: {
    color: "#1E90FF",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    borderColor: "purple",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },

  bottomSection: {
    flex: 3,
    backgroundColor: "#D8BFD8",
    justifyContent: "center",
  },

  contentContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },

  goalsHeaderText: {
    fontSize: 18,
    color: "purple",
    textAlign: "center",
    paddingTop: 20,
  },

  separator: {
    height: 3,
    width: 200,
    backgroundColor: "grey",
    alignSelf: "center",
    borderColor: "transparent",
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  addButton: {
    backgroundColor: "red",
  },
  pressableStyle: {
    opacity: 0.5,
    backgroundColor: "pink",
  },
});
