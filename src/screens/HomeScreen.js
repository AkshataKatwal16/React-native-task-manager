import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import { SCREENS } from '../utils/constants';
import { Chip } from 'react-native-paper';

const HomeScreen = ({tasks, onComplete, onDelete, changeScreen}) => {
  return (
    <View style={styles.container}>
      {/* <Button title="All tasks" mode="contained" onPress={() =>console.log('All tasks') }/> */}
      <Chip icon="application-edit-outline" style={styles.chip} onPress={()=> changeScreen(SCREENS.ADD_TASK)}>Add new Tasks</Chip>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <TaskItem title={item.title} description={item.description} date={item.date} id={item.id}  isCompleted={item.isCompleted}
        onComplete={() => onComplete(item.id)}
        onDelete={() => onDelete(item.id)}
        />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}

      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});