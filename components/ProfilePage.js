import React from 'react';
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
      <Text style={styles.User_Text}>Username</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>logout</Text>
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
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
  
  },
  ProfileText: {
    fontSize: 60,
    fontWeight: '200',
    color: globalStyles.primaryColor,
    paddingTop: "0%",
    width:'100%',
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
    marginTop: 330,
    borderRadius: 10,
  },

  buttonText: {
    color: 'black',
    fontSize: 25,
  },
});
