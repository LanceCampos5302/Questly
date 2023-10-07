import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MenuPage from './components/MenuPage';
import QuestPage from './components/QuestPage';
import ProfilePage from './components/ProfilePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="QuestPage" component={QuestPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} /> {/* Add this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

