import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';

const QuestPage = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
      <View style={styles.questNav}>
        <View style={styles.navItem}>
          <Text>Current</Text>
        </View>
        <View style={styles.navItem}>
          <Text>New</Text>
        </View>
        <View style={styles.navItem}>
          <Text>Past</Text>
        </View>
      </View>
      <Text style={styles.text}>Quest</Text>
      <MenuNav></MenuNav>
    </View>
  );
};

export default QuestPage;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questNav: {
    position: 'absolute', // Position it absolutely
    top: "1%", // Position it at the top of the screen
    width: '100%',
    height: '10%',
    backgroundColor: globalStyles.popColor,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Vertically center children
  },
  navItem: {
    flex: 1, // Distribute children evenly
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    marginTop: '10%', // Add some top margin to create space below questNav
  },
});
