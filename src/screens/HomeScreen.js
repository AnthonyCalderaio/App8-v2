/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import { createStackNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation'
import ProfileScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/ProfileScreen.js';
import BusinessScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/BusinessScreen.js';
import ChatScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/ChatScreen.js';
import SocialScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/SocialScreen.js';
import MapScreen from '/Users/anthony/Desktop/Manifest/app8/src/SwipeScreens/MapScreen.js';
//import HomeScreen from '/Users/anthony/Desktop/Manifest/app8/src/screens/HomeScreen.js';




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
        {/* <AppTabNavigator/> */}
        {/* <HomeNavigator/> */}
        
      </View>
    );
  }
}

//const HomeNavigator = createStackNavigator({
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
  // Home: {
  //   screen: HomeScreen
  // }
  // ,
  // Map: {
  //     screen: MapScreen
  //   }
  //   ,
  // Profile: {
  //   screen: ProfileScreen
  // }
//});


// const AppTabNavigator = createBottomTabNavigator({
//   // ProfileTab: ProfileScreen,
//   // BusinessTab: BusinessScreen,
//   // ChatTab: ChatScreen,
//   // SocialTab: SocialScreen,
//   //Map: MapScreen
  
//   // ,ChatTab: {
//   //     screen: ChatScreen
//   // },BusinessTab: {
//   //     screen: BusinessScreen
//   // },SocialTab: {
//   //     screen: SocialScreen
//   // }
//   // ,
//   MapTab: {
//       screen: MapScreen
//   }
//   // ,
//   // IndexTab: {
//   //     screen: IndexScreen
//   // }
// });



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
  bottomView: {

    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    //zIndex: 1,
    //position: 'absolute',
    // backgroundColor: 'blue',
     //justifyContent: 'space-between',
    // alignItems: 'stretch',
    // flex: 1,


    flex:1,alignItems:'center',justifyContent:'center',alignSelf:'stretch',backgroundColor:'blue',margin:5
  }
});

//export default createAppContainer(HomeNavigator);
export default HomeScreen;
