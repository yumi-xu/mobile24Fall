import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
    console.log(docRef);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(deletedId, collectionName) {
  try {
    const docRef = doc(database, collectionName, deletedId);
    await deleteDoc(docRef);
    console.log(`Document with ID: ${deletedId} deleted successfully.`);
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
    console.log(`All documents in collection ${collectionName} deleted.`);
  } catch (err) {
    console.log("Error deleting all documents: ", err);
  }
}
