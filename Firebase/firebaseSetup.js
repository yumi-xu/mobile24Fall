// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_apiKey,
  authDomain: process.env.EXPO_PUBLIC_authDomain,
  projectId: process.env.EXPO_PUBLIC_projectId,
  storageBucket: process.env.EXPO_PUBLIC_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_appId,
  measurementId: process.env.EXPO_PUBLIC_measurementId,
  mapsApiKey: process.env.EXPO_PUBLIC_mapsApiKey,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDltuZqNe41tGmhplEMPasUseBPI8ZgU9c",
//   authDomain: "goals-app-e9259.firebaseapp.com",
//   projectId: "goals-app-e9259",
//   storageBucket: "goals-app-e9259.appspot.com",
//   messagingSenderId: "476893558988",
//   appId: "1:476893558988:web:665998d822fb2a45ec6a69",
//   measurementId: "G-PXLJ56P1BD",
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const storage = getStorage(app);
