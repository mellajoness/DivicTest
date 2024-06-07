import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Landing from '../landing';
import Profile from '../dashboard/profile';
import {Image, StyleSheet} from 'react-native';
import Wallet from '../dashboard/wallet';
import Scan from '../dashboard/scan';
import Shipment from '../dashboard/shipment';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Shipment"
      component={Shipment}
      options={{
        tabBarLabel: 'Shipment',
        tabBarIcon: ({color, size}) => (
          <Image
            style={styles.tabicon}
            source={require('../../assets/shipmenttab.png')}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Scan"
      component={Scan}
      options={{
        tabBarLabel: 'Scan',
        tabBarIcon: ({color, size}) => (
          <Image
            style={styles.tabicon}
            source={require('../../assets/scantab.png')}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Wallet"
      component={Wallet}
      options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: ({color, size}) => (
          <Image
            style={styles.tabicon}
            source={require('../../assets/wallettab.png')}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Image
            style={styles.tabicon}
            source={require('../../assets/profiletab.png')}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Landing}  options={{headerShown: false}} />  
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
const styles = StyleSheet.create({
  tabicon: {
    //  height:25,
    //  width:25
  },
});
