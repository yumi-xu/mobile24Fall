import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(deletedId, collectionName) {
  try {
    const docRef = doc(database, collectionName, deletedId);
    await deleteDoc(docRef);
  } catch (err) {
    console.log("Error deleting document: ", err);
  }
}

export async function deleteAllFromDB(collectionName) {
  try {
    // Retrieve all documents from the collection
    const querySnapshot = await getDocs(collection(database, collectionName));
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  } catch (err) {
    console.log("Error deleting all documents: ", err);
  }
}

// Function to add or update a warning field
export async function addWarningToGoal(goalId, collectionName) {
  try {
    const docRef = doc(database, collectionName, goalId);
    await updateDoc(docRef, {
      warning: true,
    });
  } catch (err) {
    console.log("Error updating document with warning: ", err);
  }
}
