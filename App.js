import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import GoalsList from "./components/GoalsList";
import InputBox from "./components/InputBox";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isGoalModalVisible, setIsGoalModalVisible] = useState(false);


  const addGoalToGoalsList = (goalText) => {
    setGoalsList((currentGoalsList) => [...currentGoalsList, 
      {
        id: Date.now(), 
        value: goalText
      }
    ]);
    setIsGoalModalVisible(false);
  };

  const handleDeleteGoal = (goalId) => {
    setGoalsList((currentGoals => {
      
      return (
        currentGoals.filter((goalObj) => {
          return goalObj.id !== goalId;
        })
      ) 
    }))
  }

  return (
    <View style={styles.root}>
      
      <Button title="Add New Goal" onPress={() => { setIsGoalModalVisible((currentGoalModalVisibility) => !currentGoalModalVisibility ) } }/>
      <InputBox cancelInputModal={ () => {setIsGoalModalVisible(false)} } isAddGoalVisible={isGoalModalVisible} addGoalToGoalsList={addGoalToGoalsList} />

      <FlatList 
        data={goalsList}
        renderItem={itemData => (
          <GoalsList id={itemData.item.id} onDelete={handleDeleteGoal} title={itemData.item.value} />
        )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 10,
    paddingTop: 50,
  }
});
