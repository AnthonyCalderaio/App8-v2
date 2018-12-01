/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation'
import ProfileScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/ProfileScreen.js';
import BusinessScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/BusinessScreen.js';
import ChatScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/ChatScreen.js';
import SocialScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/SocialScreen.js';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTabNavigator/>
      </View>
    );
  }
}
const AppTabNavigator = createBottomTabNavigator({
  ProfileTab: ProfileScreen,
  BusinessTab: BusinessScreen,
  ChatTab: ChatScreen,
  SocialTab: SocialScreen
  
  // ,ChatTab: {
  //     screen: ChatScreen
  // },BusinessTab: {
  //     screen: BusinessScreen
  // },SocialTab: {
  //     screen: SocialScreen
  // }
  // ,MapTab: {
  //     screen: MapScreen
  // }
  // ,
  // IndexTab: {
  //     screen: IndexScreen
  // }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createAppContainer(AppTabNavigator);