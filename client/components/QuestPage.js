import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles, resetStyles } from '../AppStyles';
import MenuNav from './MenuNav';
import axios from 'axios';
import { GOOGLE_PLACES_API_KEY } from './config.js';
import QuestSelection from './QuestSelection';
import * as Location from 'expo-location';

async function fetchPlaces(location) {

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=34.0489,-111.0937&radius=1500&type=Outside&key=' + GOOGLE_PLACES_API_KEY

      );

    // Handle the response data here
    const places = response.data.results.slice(0, 30);

    // places.forEach((place) => {
    //   console.log('Name:', place.name);
    //   console.log('Address:', place.vicinity);
    //   console.log('------------------------');
    // });
    return places;
  } catch (error) {
    // Handle errors here
    console.error(error);
    return [];
  }
}

const QuestPage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Current'); // Initialize with 'New' selected
  const [location, setLocation] = useState(null);
  const [placesData, setPlacesData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleNavItemPress = (item) => {
    setSelectedNavItem(item);
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        //const userLocation = await Location.getCurrentPositionAsync({});
        userLocation = { latitude: 123.45, longitude: 67.89 }
        setLocation(userLocation);

        // Fetch places when location is available
        if (userLocation) {
          fetchPlaces(userLocation).then((places) => {
            setPlacesData(places);
            fetchPlaces(userLocation);
          });
        }
      } catch (error) {
        setErrorMsg('Error fetching location: ' + error.message);
      }
    })();
  }, []);

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
            <Text style={[styles.text]}>Quest</Text>
          </TouchableOpacity>
          {/*}
          <TouchableOpacity
            style={[
              styles.navItem,
              selectedNavItem === 'New' && styles.navItemSelected,
            ]}
            onPress={() => handleNavItemPress('New')}
          >
            <Text style={[styles.text]}>New</Text>
          </TouchableOpacity>*/}
        </View>
      </View>

      {/* Center Content */}
      <View style={styles.centerContent}>
      
        <ScrollView contentContainerStyle={styles.centerContentRow}>
          <View style={styles.bufferTop}></View>
          {/* Add a Text tag for each place in placesData */}
          {placesData.map((place, index) => (
  <QuestSelection
    key={index} // Add a unique key prop
    name={place.name}
    address={place.business_status}
    url={place.types}
    next={place.website}
  />
))}

          <View style={styles.bufferBottom}></View>
        </ScrollView>
      </View>

      <MenuNav />
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
