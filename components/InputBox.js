import React , { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from "react-native";

const InputBox = (props) => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const handleEnteredGoal = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalToList = () => {
    props.addGoalToGoalsList(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal animationType="slide" visible={props.isAddGoalVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="course goal"
          style={styles.input}
          onChangeText={handleEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          
          <View style={styles.button}>
            <Button title="Add" color="green" onPress={ addGoalToList } />
          </View>
          
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={ () => { setEnteredGoal(""); props.cancelInputModal(); } } />
          </View>
        
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 30
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    width:"100%",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  }
})

export default InputBox;

