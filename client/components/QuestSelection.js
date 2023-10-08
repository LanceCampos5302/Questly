import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';

const QuestComponent = (props) => {
  return (
    <View style={styles.container}>
    {/* 
      <View style={styles.iconContainer}>
        Add your quest icon or image here 
        <Text style={styles.questIcon}>{props.icon}</Text>
      </View>*/}
      <View style={styles.textContainer}>
        <Text style={styles.questTitle}>{props.name}</Text>
        <View style={styles.questInfoBox}>
            <Text style={styles.questInfo}>{props.address}</Text>
            <Text style={styles.questInfo}>{props.url}</Text>
            <Text style={styles.questInfo}>{props.next}</Text>
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
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    borderWidth: 8, 
  },
  iconContainer: {
    backgroundColor: 'lightblue',
    padding: 0,
    marginRight: 10,
  },
  questIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
   // backgroundColor: 'red',
    width: "100%",
    height: "100%",
    textAlign: 'center',
    alignItems: 'center',
    
  },
  questTitle: {
    fontSize: 22,
    paddingTop: '3%',
    fontWeight: 'bold',
    marginBottom: 5,
    color: globalStyles.popColor,
    
  },
  questInfoBox: {

   // backgroundColor: globalStyles.primaryColor,
  },
  questInfo: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
});

