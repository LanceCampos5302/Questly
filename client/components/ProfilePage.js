
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';
import { useNavigation, useRoute } from '@react-navigation/native';


const ProfilePage = () => {

  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={[resetStyles.resetStyles, styles.background]}>
      {/* Top Section */}
      <View style={styles.top}>
        {/* Centered Container for Text */}
        <View style={styles.centeredTextContainer}>
          <Text style={styles.mainLogo}>Questly</Text>
        </View>
      </View>

      {/* Center Content */}
      <View style={styles.centeredTextContainer}>
      <Text style={[styles.logoText, styles.profile]}>Settings</Text>
      <Text style={styles.messageText}>Questly is an app that lets you do the discovering.We give 
      you a general idea of where to go for an adventure and you do the rest. The world is in your hands.
      Are these locations safe? Yes? It is up to you. There is only one person that can give you an adventure
      and that is you. So go off and find something, or nothing, but that will all be part of the quest.
      
      </Text>
      

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText} onPress={() => Login()}>Logout</Text>
      </TouchableOpacity>
      

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
    backgroundColor: globalStyles.primaryColor,
  },
  top: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingTop: 14,
    color: globalStyles.secondaryColor,
  },
  centeredTextContainer: {
    backgroundColor: globalStyles.primaryColor,
    width: '100%',
    height: '78%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 25,
    padding: '5%',
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: '100%',
    borderBottomWidth: 4,
    borderBottomColor: globalStyles.secondaryColor,
    textAlign: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    display: 'flex', // Enable flex layout
    flexDirection: 'column', // Align text vertically within the container
    backgroundColor: globalStyles.popColor,
  },
  
  ProfileText: {
    fontSize: 60,
    fontWeight: '300',
    color: globalStyles.primaryColor,
    width: '100%',
    backgroundColor: globalStyles.secondaryColor,
  },
  levelBox: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
    height: '6%',
    width: '25%',
    color: globalStyles.primaryColor,
    backgroundColor: globalStyles.secondaryColor,
  },
  levelText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: globalStyles.primaryColor,
  },
  stat_text: {
    fontSize: 30,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    height: '8%', // Increase this value for taller button
    width: '70%', // Increase this value for wider button
    backgroundColor: globalStyles.popColor, // Set your desired color here
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 'bold', // Corrected 'Bold' to 'bold'
    fontSize: 25,
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
});
