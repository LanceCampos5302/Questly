import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MenuPage from './components/MenuPage';
import QuestPage from './components/QuestPage';
import ProfilePage from './components/ProfilePage';

export default function App() {
  return (
    <View style={styles.container}>
        <QuestPage></QuestPage>
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

/*
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage.js';
import RegisterPage from './components/RegisterPage/RegisterPage.js';
import HomePage from './components/HomePage/HomePage.js';
import CassettePage from './components/CassettePage/CassettePage';
import SettingPage from './components/SettingPage/SettingPage.js';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/Login" element={<LoginPage/>}/>
          <Route path="/Register" element={<RegisterPage/>}/>
          <Route exact path="/Home" element={<HomePage/>}/>
          <Route exact path="/CassettePage" element={<CassettePage/>}/>
          <Route exact path="/Settings" element={<SettingPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
*/
