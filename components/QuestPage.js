import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';

const QuestPage = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
      {/* Top Section */}
      <View style={styles.top}>
        <Text style={styles.logoText}>...........</Text>
        <View style={styles.questNav}>
          <View style={styles.navItem}>
            <Text style={[styles.text]}>Current</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={[styles.text]}>New</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={[styles.text]}>Past</Text>
          </View>
        </View>
      </View>

      {/* Center Content */}
      <View style={styles.centerContent}>
        <Text>..............</Text>
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
    height: '20%', // Adjust the height as needed
    backgroundColor: globalStyles.popColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    width: '100%',
    height: '60%', // Adjust the height as needed
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',       // Set border color to red
    borderWidth: 2,          // Set border width (adjust as needed)
    borderStyle: 'dashed', 
  },
  bottomBlock: {
    width: '100%',
    height: '20%', // Adjust the height as needed
    backgroundColor: '#fff',
  },
  questNav: {
    height: '38%',
    backgroundColor: globalStyles.secondaryColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingBottom: '5%',
    color: globalStyles.secondaryColor,
    marginTop: '10%',
  },
});
