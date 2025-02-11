import React from 'react';
import {View, Text, StatusBar, StyleSheet, useColorScheme} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default function App() {
  const darkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.bigBlue}>Hello world</Text>
    </View>
  );
}
