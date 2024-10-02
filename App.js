import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetail";
import { Alert, Button } from "react-native";
import { headerStyles } from "./Components/Styles";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...headerStyles,
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route, navigation }) => ({
            ...headerStyles,
            title: route.params ? route.params.goal.text : "More Details",
            headerLeft: () => (
              <Button
                title="All My Goals"
                color="#fff"
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <Button
                title="Warning"
                color="#ff3333"
                onPress={() =>
                  Alert.alert("Warning!", "This is a custom warning button.")
                }
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
