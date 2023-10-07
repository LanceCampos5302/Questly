import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

const MenuNav = () => {
  const [selectedSection, setSelectedSection] = useState('Quest'); // Initialize with the 'Quest' section as selected
  const navigation = useNavigation();
  const route = useRoute();

  const isQuestPage = route.name === 'QuestPage';
  const isProfilePage = route.name === 'Profile';

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    navigation.navigate(section);
  };

  return (
    <View style={[resetStyles.resetStyles, styles.container]}>
      <View style={styles.navBox}>
        <TouchableOpacity
          style={[
            styles.navSection,
            isProfilePage && styles.navCenterSection,
          ]}
          onPress={() => handleSectionClick('Profile')}
        >
          <Text style={[styles.text, isProfilePage && styles.centerText]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navSection,
            isQuestPage && styles.navCenterSection,
          ]}
          onPress={() => handleSectionClick('QuestPage')}
        >
          <Text style={[styles.text, isQuestPage && styles.centerText]}>Quest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navSection,
            !isQuestPage && !isProfilePage && styles.navCenterSection,
          ]}
          onPress={() => handleSectionClick('Radar')}
        >
          <Text style={[styles.text, !isQuestPage && !isProfilePage && styles.centerText]}>Radar</Text>
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
