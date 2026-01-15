import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Chip } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = ({title, description, date , id, isCompleted, onComplete, onDelete}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} >
        {isCompleted && (<Chip
        icon="check">
          Done
        </Chip>)
        }
        <Card.Title title={title} titleStyle={styles.title} />
        <Card.Content>
          <Text style={styles.description}>Task Item</Text>
        </Card.Content>
        <View style={styles.buttonContainer}>
          {!isCompleted && <Button
            mode="contained"
            onPress={onComplete}
            style={styles.okButton}
            labelStyle={styles.buttonLabel}
          >
            Complete
          </Button>}
          <Button
            mode="contained"
            onPress={onDelete}
            style={styles.cancelButton}
            labelStyle={styles.buttonLabel}
          >
            Delete
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  card: {
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  okButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#F44336',
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
  },
});