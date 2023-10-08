
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';

const handleLogout = () => {
  // Here you can call your API to logout
  
  
}

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
      <View style={styles.centeredTextContainer}>
      <Text style={styles.ProfileText}>         Profile</Text>
      <Text style={styles.logoText}>Username</Text>
      <Text style={styles.stat_text}>Trail XP: 254/500 | Fish XP: 37/50 | Food XP: 478/500</Text>
      


      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.text}>App created by Team Lead Danyal Siddiqi and his assistant Lance Campos</Text>



      {/**/}</View>

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
    height: '13%',
    backgroundColor: globalStyles.popColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    width: '100%',
    height: '100%',
    paddingTop: "7%",
    alignItems: 'center', // Center horizontally
    JustifyContent: 'center',
    
    backgroundColor: globalStyles.primaryColor,
  },
  centerContent: {
    width: '100%',
    height: '72%',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 15,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  
  
  
  },
  stat_text: {
    fontSize: 15,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 320,
  },


  User_Text:{
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'300',
  },
  logoText: {
    fontSize: 60,
    
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    //fontFamily:'serif',
    
  
  },
  User_Text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  ProfileText: {
    fontSize: 60,
    fontWeight: '300',
    color: globalStyles.primaryColor,
    paddingBottom: "0%",
    width:'100%',
    //marginBottom: 300,//moves username and login button etc down
    //justifyContent: 'center',
    //alignItems: 'center', // Center horizontally
    backgroundColor: globalStyles.secondaryColor,
  },
  button: {
    height: 70, // Increase this value for taller button
    width: 290, // Increase this value for wider button
    backgroundColor: globalStyles.popColor, // Set your desired color here
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 300,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize:'Bold',
    fontSize: 25,
  },
});
