/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Landing from './src/component/landing';
import 'react-native-gesture-handler';
import Auth from './src/component/routes/Auth';
function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2F50C1" barStyle="light-content" />
      <Auth />
    </View>
  );
}

export default App;  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
