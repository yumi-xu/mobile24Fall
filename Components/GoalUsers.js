import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllDocument, writeToDB } from "../Firebase/firestoreHelper";

export default function GoalUsers({ id }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //fetch data
    async function fetchData() {
      try {
        const dataFromDB = await getAllDocument(`goals/${id}/users`);
        //console.log(dataFromDB);
        if (dataFromDB.length) {
          setUsers(
            dataFromDB.map((user) => {
              return user.name;
            }),
          );
          return;
        }
        //console.log("reading data from API");
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
        data.forEach((user) => {
          writeToDB(user, `/goals/${id}/users`);
        });
        setUsers(data.map((user) => user.name));
        //set the user
      } catch (err) {
        console.log("fetch data error", err);
      }
    }
    fetchData();
  }, []);
  return (
    <View>
      <FlatList data={users} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({});
