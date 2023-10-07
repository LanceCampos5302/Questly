import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';

const MenuNav = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.container]}>
      <View style={styles.navBox}>
        <View style={styles.navSection}>
          <Text style={[styles.text]}>Profile</Text>
        </View>
        <View style={styles.navCenterSection}>
          <Text style={[styles.centerText]}>Quest</Text>
        </View>
        <View style={styles.navSection}>
          <Text style={[styles.text]}>Radar</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuNav;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '12%',
    bottom: 0,
    zIndex: 999, // Ensure it's on top of other content
  },
  navBox: {
    flexDirection: 'row',
    justifyContent: 'space-between', // To evenly space the sections
    width: '100%',
    height: '100%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  navSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
    height: '100%',
    backgroundColor: globalStyles.primaryColor,
  },
  navCenterSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
    height: '100%',
    backgroundColor: globalStyles.popColor,
  },
  text: {
    fontSize: 30,
    color: globalStyles.secondaryColor,
  },
  centerText: {
    fontSize: 30,
    color: globalStyles.primaryColor,
  },
});
