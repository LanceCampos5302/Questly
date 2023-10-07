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
        <Text style={styles.questTitle}>Wekiva Bear Trail</Text>
        <View style={styles.questInfoBox}>
            <Text style={styles.questInfo}>12.5 Miles</Text>
            <Text style={styles.questInfo}>$$$</Text>
        </View>
      </View>
    </View>
  );
};

export default QuestComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white',
    width: '90%',
    height: 110,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
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
   // backgroundColor: 'red',
    width: "75%",
    height: "100%",
    textAlign: 'center',
    alignItems: 'center',
  },
  questTitle: {
    fontSize: 28,
    paddingTop: '3%',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  questInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    height: '30%',
   // backgroundColor: globalStyles.primaryColor,
  },
  questInfo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

