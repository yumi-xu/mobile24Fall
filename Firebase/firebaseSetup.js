// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDltuZqNe41tGmhplEMPasUseBPI8ZgU9c",
  authDomain: "goals-app-e9259.firebaseapp.com",
  projectId: "goals-app-e9259",
  storageBucket: "goals-app-e9259.appspot.com",
  messagingSenderId: "476893558988",
  appId: "1:476893558988:web:665998d822fb2a45ec6a69",
  measurementId: "G-PXLJ56P1BD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
