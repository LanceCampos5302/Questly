import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';

const ProfilePage = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
      {/* Top Section */}
      <View style={styles.top}>
        {/* Centered Container for Text */}
        <View style={styles.centeredTextContainer}>
          <Text style={styles.logoText}>Questly</Text>
        </View>
      </View>

      {/* Center Content */}
      <View style={styles.centerContent}>

      </View>

      {/* Bottom Block */}
      <View style={styles.bottomBlock}></View>

      {/* MenuNav */}
      <MenuNav />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.popColor,
  },
  top: {
    width: '100%',
    height: '16%',
    backgroundColor: globalStyles.popColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    width: '100%',
    height: '100%',
    paddingTop: "12%",
    alignItems: 'center', // Center horizontally
    backgroundColor: 'green',
  },
  centerContent: {
    width: '100%',
    height: '72%',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomBlock: {
    width: '100%',
    height: '20%',
    backgroundColor: '#fff',
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
    color: globalStyles.secondaryColor,
  },
});
