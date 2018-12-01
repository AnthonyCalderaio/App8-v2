import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ListUser from '/Users/anthony/Desktop/Manifest/app8/src/components/ListUser/ListUser.js';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjp3334jy8c9q0125gpihcz4s' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


class Profiles extends React.Component {
  render() {
    return (
        <ApolloProvider client={client}>
        <ListUser/>
        </ApolloProvider>
    )
  }
}

export default Profiles;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

