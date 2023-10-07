import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';

const MenuNav = () => {
  const [selectedSection, setSelectedSection] = useState('Quest'); // Initialize with the 'Quest' section as selected

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  
    // Check if the clicked section is "Profile" and navigate to the ProfilePage
    if (section === 'Profile') {
      navigation.navigate('ProfilePage'); // Use the name of your screen
    }
  };

  return (
    <View style={[resetStyles.resetStyles, styles.container]}>
      <View style={styles.navBox}>
        <TouchableOpacity
          style={[
            styles.navSection,
            selectedSection === 'Profile' && styles.navCenterSection,
          ]}
          onPress={() => handleSectionClick('Profile')}
        >
          <Text style={[styles.text, selectedSection === 'Profile' && styles.centerText]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navSection,
            selectedSection === 'Quest' && styles.navCenterSection,
          ]}
          onPress={() => handleSectionClick('Quest')}
        >
          <Text style={[styles.text, selectedSection === 'Quest' && styles.centerText]}>Quest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navSection,
            selectedSection === 'Radar' && styles.navCenterSection,
          ]}
          onPress={() => handleSectionClick('Radar')}
        >
          <Text style={[styles.text, selectedSection === 'Radar' && styles.centerText]}>Radar</Text>
        </TouchableOpacity>
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
    zIndex: 999, 
    backgroundColor: globalStyles.primaryColor,
  },
  navBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
