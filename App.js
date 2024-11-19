import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";
import Home from "./Components/Home";
import GoalDetails from "./Components/GoalDetail";
import { Button } from "react-native";
import { headerStyles } from "./Components/Styles";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PressableButton from "./Components/PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import Map from "./Components/Map";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true); // User is signed in
      } else {
        setUserLoggedIn(false); // User is signed out
      }
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserLoggedIn(false); // Update state after sign-out
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  const AuthStack = (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );
  const AppStack = (
    <>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "All My Goals",
          headerRight: () => {
            return (
              <PressableButton
                componentStyle={{ backgroundColor: "purple" }}
                pressedHandler={() => {
                  navigation.navigate("Profile");
                }}
              >
                <AntDesign name="user" size={24} color="white"></AntDesign>
              </PressableButton>
            );
          },
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen name="Details" component={GoalDetails} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerRight: () => (
            <PressableButton
              componentStyle={{ backgroundColor: "purple" }}
              pressedHandler={handleSignOut}
            >
              <AntDesign name="logout" size={24} color="white" />
            </PressableButton>
          ),
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ title: "Map View" }}
      />
    </>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        }}
      >
        {isUserLoggedIn ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
