/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag'
import { ApolloProvider } from 'react-apollo'


const link = new createUploadLink({ uri: 'https://api.graph.cool/file/v1/cjp3334jy8c9q0125gpihcz4s' })

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// const uploadFile = gql`
// mutation($file: Upload!) {
//   uploadFile(file: $file) {
//     id
//   }
// }
// `


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Text>HI</Text>
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

//export default graphql(uploadFile, {name: 'uploadFile'})(UploadImage)