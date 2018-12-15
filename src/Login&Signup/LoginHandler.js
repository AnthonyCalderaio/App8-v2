/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import LoginScreen from '/Users/anthony/Desktop/Manifest/app8/src/Login&Signup/LoginScreen.js';

import { ApolloClient  } from 'apollo-client';
import { HttpLink      } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';



const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjp3334jy8c9q0125gpihcz4s' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


// mutation GenerateNodeToken($rootToken: String!, $serviceId: ID!, $nodeId: ID!) {
//   generateNodeToken(input: {
//     rootToken: $rootToken,
//     serviceId: $serviceId,
//     nodeId: $nodeId,
//     modelName: "User",
//     expirationInSeconds: 864000, # 864000 seconds are 10 days (default is 30)
//     clientMutationId: ""
//   }) {
//     token
//   }
// }

export default class LoginHandler extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <LoginScreen/>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});