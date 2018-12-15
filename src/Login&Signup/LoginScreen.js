/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation'
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.TextInputContainers}
            placeholder={"Enter PhoneNumber"}
            placeholderTextColor="yellow"
        />
        <TextInput
        style={styles.TextInputContainers}
            placeholder={"Enter Password"}
            placeholderTextColor="yellow"
            
        />
        <Button
        Text={"Login"}
        onPress={() => {}}
        />
        
      </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
     
    TextInputContainers: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    }
}
  );