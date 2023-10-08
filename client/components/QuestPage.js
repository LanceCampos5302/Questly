import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';
import QuestSelection from './QuestSelection';

const QuestPage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('New'); // Initialize with 'New' selected

  const handleNavItemPress = (item) => {
    setSelectedNavItem(item);
  };

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
          <TouchableOpacity
            style={[
              styles.navItem,
              selectedNavItem === 'Current' && styles.navItemSelected,
            ]}
            onPress={() => handleNavItemPress('Current')}
          >
            <Text style={[styles.text]}>Current</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navItem,
              selectedNavItem === 'New' && styles.navItemSelected,
            ]}
            onPress={() => handleNavItemPress('New')}
          >
            <Text style={[styles.text]}>New</Text>
          </TouchableOpacity>

        </View>
      </View>

{/* Center Content */}
<View style={styles.centerContent}>
  <ScrollView contentContainerStyle={styles.centerContentRow}>
  <View style={styles.bufferTop}></View>
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <QuestSelection />
    <View style={styles.bufferBottom}></View>
  </ScrollView>
</View>

      <MenuNav/>
    </View>
  );
};

export default QuestPage;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  top: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    width: '100%',
    height: '100%',
    paddingTop: '12%',
    alignItems: 'center', // Center horizontally
  },
  centerContent: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-start',
  },
  centerContentRow: {
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    width: '100%',
  },
  bufferTop: {
    height: 20,
  },
  bufferBottom: {
    height: 160,
  },
  questNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: globalStyles.secondaryColor,
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
