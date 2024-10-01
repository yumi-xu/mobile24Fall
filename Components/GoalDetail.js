import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalDetails = ({ route }) => {
  const { goalText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Goal Details:</Text>
      <Text style={styles.goalText}>{goalText}</Text>
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
