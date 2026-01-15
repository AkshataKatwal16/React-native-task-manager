import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Chip, Appbar } from 'react-native-paper';
import { SCREENS } from '../utils/constants';

const AddTaskScreen = ({onAddTask, changeScreen}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const handleAddTask = () => {
    console.log('Add Task', title, description, date);
    // setDate(new Date().toISOString());
    // setTitle('');
    // setDescription('');
    if(!title.trim() || !description.trim()){
      Alert.alert('Error', 'Title and description are required');
      return;
    }
    const newTask={
      title,
      description,
      date: new Date().toISOString(),
      isCompleted: false,
      id: Date.now(),
    }
    onAddTask(newTask);
    console.log('New Task', newTask);
  };
  return (
    <View style={{ flex: 1 }}>
    <Appbar.Header style={styles.appbar}>

      <Appbar.BackAction onPress={() => changeScreen(SCREENS.HOME)}   iconColor="#fff" />
      <Appbar.Content title="Add Task" titleStyle={{ color: 'white' }} />
    </Appbar.Header>
  
    <View style={styles.container}>
      <Chip icon="application-edit-outline" style={styles.chip}>
        Add new Tasks
      </Chip>
  
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
  
      <TextInput
        style={styles.input}
        multiline
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
  
      <Button mode="contained" onPress={handleAddTask}>
        Add Task
      </Button>
    </View>
  </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  
  text: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ccc',
  },
  input: {
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  chip: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  appbar: {
    backgroundColor: '#6200ee', // material primary
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});

export default AddTaskScreen;