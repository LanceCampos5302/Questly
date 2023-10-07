import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';

const QuestComponent = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Add your quest icon or image here */}
        <Text style={styles.questIcon}>Icon</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.questTitle}>{title}</Text>
        <Text style={styles.questDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default QuestComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Vertically center items
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Add elevation (shadow)
  },
  iconContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  questIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1, // Take remaining horizontal space
  },
  questTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  questDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

