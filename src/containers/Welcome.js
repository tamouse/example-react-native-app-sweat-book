import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const Welcome = (props) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Sweatbook
      </Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>
        Log your fitness
      </Text>
    </View>
    <View style={{ padding: 30 }}>
      <TouchableOpacity
        onPress={props.startWorkout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    padding: 50,
    alignItems: 'center'
  },
  lastWorkout: {
    fontSize: 30,
    fontWeight: '300',
    color: 'blue'
  },
  button: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20
  },
  buttonText: {
    color: '#333'
  }
});
