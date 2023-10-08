import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
//import GOOGLE_PLACES_API_KEY from '@env'
import { GOOGLE_PLACES_API_KEY } from './config.js';
//require('dotenv').config();

async function fetchPlaces(location) {
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=' + GOOGLE_PLACES_API_KEY
    );
    console.log('API Response:', response);

    // Handle the response data here
    const places = response.data.results.slice(0, 30);
    return places;
  } catch (error) {
    // Handle errors here
    console.error(error);
    return [];
  }
}

const TestComponent = () => {
  const [placesData, setPlacesData] = useState([]);

  useEffect(() => {
    // Call the fetchPlaces function to test it
    const location = { latitude: 123.45, longitude: 67.89 };
    fetchPlaces(location).then((places) => {
      setPlacesData(places);
      printPlaces(places); // Print places to the console
    });
  }, []);

  const printPlaces = (places) => {
    console.log('Name:', places);
    const location = { latitude: 123.45, longitude: 67.89 };
    //console.log('API Request URL:', `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=10&type=restaurant&key=${GOOGLE_PLACES_API_KEY}`);

    places.forEach((place) => {
      console.log('Name:', place.name);
      console.log('Address:', place.vicinity);
      console.log('------------------------');
    });
  };

  return (
    <View>
      <Text style={styles.heading}>Places Data:</Text>
      <FlatList
        data={placesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.placeItem}>
            <Text style={styles.placeName}>{item.name}</Text>
            <Text style={styles.placeAddress}>{item.vicinity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeAddress: {
    fontSize: 14,
  },
});

export default TestComponent;
