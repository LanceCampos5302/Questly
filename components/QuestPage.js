import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';
import QuestSelection from './QuestSelection';

const QuestPage = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
      {/* Top Section */}
      <View style={styles.top}>
        {/* Centered Container for Text */}
        <View style={styles.centeredTextContainer}>
          <Text style={styles.logoText}>Questly</Text>
        </View>
        
        {/* QuestNav at the bottom of the Top Section */}
        <View style={styles.questNav}>
          <View style={styles.navItem}>
            <Text style={[styles.text]}>Current</Text>
          </View>
          <View style={[styles.navItem, styles.navItemSelected]}>
            <Text style={[styles.text]}>New</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={[styles.text]}>Past</Text>
          </View>
        </View>
      </View>

      {/* Center Content */}
      <View style={styles.centerContent}>
        <View style={styles.centerContentRow}>
          <QuestSelection></QuestSelection>
          <QuestSelection></QuestSelection>
          <QuestSelection></QuestSelection>
        </View>
      </View>

      {/* Bottom Block */}
      <View style={styles.bottomBlock}></View>

      {/* MenuNav */}
      <MenuNav />
    </View>
  );
};

export default QuestPage;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.popColor,
  },
  top: {
    width: '100%',
    height: '25%',
    backgroundColor: globalStyles.popColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    width: '100%',
    height: '100%',
    paddingTop: "12%",
    alignItems: 'center', // Center horizontally
    backgroundColor: globalStyles.primaryColor,
  },
  centerContent: {
    width: '100%',
    height: '70%',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  centerContentRow: {
    flexDirection: 'column', // Correct the typo here
    alignItems: 'center', // Center horizontally
    width: '100%',
    height: 120,
  },
  bottomBlock: {
    width: '100%',
    height: '20%',
  },
  questNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 4, // Set the border width as needed
    borderBottomColor: globalStyles.secondaryColor, // Set the border color as needed
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  navItemSelected: {
    backgroundColor: globalStyles.popColor,

  },
  text: {
    fontSize: 30,
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
  },
});
