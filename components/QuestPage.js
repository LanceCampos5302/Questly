import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';

const QuestPage = () => {
  return (
    <View style={[resetStyles.resetStyles, styles.background]}>

        <View style={[styles.top]}>
            <Text style={styles.text}></Text>
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
        </View>

    

      
      <MenuNav></MenuNav>
    </View>
  );
};

export default QuestPage;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.popColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top:{
    position: 'absolute',
    top: "0%",
    width: '100%',
    height: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.errorColor,
  },
  questNav: {
    height: '30%',
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
    fontSize: 5,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    marginTop: '10%', // Add some top margin to create space below questNav
  },
});
