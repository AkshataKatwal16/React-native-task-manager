import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SCREENS, TASKS } from '../src/utils/constants';
import HomeScreen from '../src/screens/HomeScreen';
import AddTaskScreen from '../src/screens/AddTaskScreen';

const Appmanage = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [currentScreen, setCurrentScreen] = useState(SCREENS.ADD_TASK);
  const onComplete = (id) => {
   // setTasks(tasks.map(task => task.id === id ? {...task, isCompleted: true} : task));
   setTasks(tasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task));
   alert(`Complete task ${id}`);
  };
  const onDelete = (id) => {
    //setTasks(tasks.filter(task => task.id !== id));
    setTasks(tasks.filter(task => task.id !== id));
  alert(`Delete task ${id}`);
  };
  const onAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setCurrentScreen(SCREENS.HOME);
  };
  const changeScreen = (screen) => {
    setCurrentScreen(screen);
  };
  return (
    <View style={styles.container}>
      <PaperProvider>
        {currentScreen === SCREENS.HOME && <HomeScreen tasks={tasks} onComplete={onComplete} onDelete={onDelete} changeScreen={changeScreen} />}
        {currentScreen === SCREENS.ADD_TASK && <AddTaskScreen onAddTask={onAddTask} changeScreen={changeScreen} />}

      </PaperProvider>
    </View>
  );
};

export default Appmanage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});