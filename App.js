import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MenuPage from './components/MenuPage';

export default function App() {
  return (
    <View style={styles.container}>
        <MenuPage></MenuPage>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
