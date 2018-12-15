import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ListInfo from '/Users/anthony/Desktop/Manifest/app8/src/components/ShowUserInfo/ListInfo.js';

import { ApolloClient  } from 'apollo-client';
import { HttpLink      } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo'
import { ShowPicture    } from '/Users/anthony/Desktop/Manifest/app8/src/components/ShowUserInfo/ShowPicture/ShowPicture.js';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjp3334jy8c9q0125gpihcz4s' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


class MyProfileAvatar extends React.Component {
  render() {
    return (
        <ApolloProvider client={client}>
        <ShowPicture/>
        </ApolloProvider>
    )
  }
}

export default MyProfileAvatar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

