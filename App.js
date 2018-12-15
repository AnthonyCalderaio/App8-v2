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
import HomeScreen from '/Users/anthony/Desktop/Manifest/app8/src/screens/HomeScreen.js';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo'
import LoginScreen from '/Users/anthony/Desktop/Manifest/app8/src/Login&Signup/LoginScreen.js';
//import PracticeScreen from '/Users/anthony/Desktop/Manifest/app8/src/Menus/MapButtonSearchMenu/PracticeScreen.js';
//import PracticeScreen2 from '/Users/anthony/Desktop/Manifest/app8/src/Menus/MapButtonSearchMenu/PracticeScreen2.js';
//import PracticeScreen3 from '/Users/anthony/Desktop/Manifest/app8/src/Menus/MapButtonSearchMenu/PracticeScreen3.js';
import ProfileScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/ProfileScreen.js';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjp3334jy8c9q0125gpihcz4s' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator/>
      </ApolloProvider>
    );
  }
}

const AppNavigator = createStackNavigator({
  // Login: {
  //   screen: LoginScreen
  // },
  // PracticeScreen: {
  //   screen: PracticeScreen
  // },
  // PracticeScreen2: {
  //   screen: PracticeScreen2
  // },
  // PracticeScreen3: {
  //   screen: PracticeScreen3
  // },
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
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

export default createAppContainer(AppNavigator);