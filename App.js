import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetail";
import { Button } from "react-native";
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
          options={{ ...headerStyles }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
