import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function GoalUsers() {
  useEffect(() => {
    const [users, setUsers] = useState([]);
    //fetch data
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
        );
        // promise is not getting rejected
        if (!response.ok) {
          //http error
          throw new Error(`an http happened with status: ${response.status}`);
        }
        //ok, extract data
        const data = await response.json();
        //set the user
        console.log(data[0].name);
      } catch (err) {
        console.log("fetch data error", err);
      }
    }
    fetchData();
  }, []);
  return (
    <View>
      <FlatList></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
