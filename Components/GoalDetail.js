import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const GoalDetails = ({ route }) => {
  const { goal } = route.params;
  console.log(route.params);
  const navigation = useNavigation();
  // function moreDetailHandle(){
  //   navigation.navigate("Details");
  // }

  return (
    <View style={styles.container}>
      {route.params ?
        (<Text style={styles.detailText}>Text: {goal.text} id :{goal.id}</Text>):
        (<Text>"More Details"</Text>)
      }

      <Button
        title="More details"
        //onPress={moreDetailHandle}
        onPress={() =>
          navigation.push('Details', { goal: goal }) // Push a new GoalDetails screen onto the stack
        }
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  detailText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  goalText: {
    fontSize: 18,
    color: 'purple',
  },
});

export default GoalDetails;
