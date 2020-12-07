import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const GoalsList = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.goal}>
        <Text style={styles.textColor}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: 'black',
    backgroundColor: 'coral',
    marginVertical: 5,
  },
  textColor: {
    color: "black"
  }
})

export default GoalsList;

