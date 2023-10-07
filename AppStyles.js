import { StyleSheet } from 'react-native';

const globalStyles = {
    primaryColor: '#cf1717',
    secondaryColor: '#232222',
    mainFont: 'Bebas Neue',
    cassetteBackground: '#121211',
    errorColor: 'rgb(222, 13, 13)',
  };

const resetStyles = StyleSheet.create({
    resetStyles: {
      margin: 0,
      padding: 0,
    },
  });

export { globalStyles, resetStyles };