import { StyleSheet } from 'react-native';

const globalStyles = {
    primaryColor: '#F2F4F3',
    secondaryColor: '#35363b',
    popColor: '#DC143C',
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