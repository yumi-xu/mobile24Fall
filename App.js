import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#6200EE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route }) => ({
            title: route.params.goal.text,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "600",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
