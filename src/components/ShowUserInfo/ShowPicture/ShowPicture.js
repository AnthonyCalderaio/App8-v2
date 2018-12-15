import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default class ShowPicture extends React.Component {

  componentDidMount() {

  }

  render () {
    // const AvatarQuery = gql`
    //                     query {
    //                         User(id: "cjpa9ea7z0vk7012153b3b0b3") {
    //                         name
    //                         age
    //                         phone
    //                         }
    //                     }`
    return (
      <View style={styles.imageContainer}>
        {/* <Image 
            style={styles.imageContainer}
            source={{uri: 'http://placehold.it/100x100'}}

        /> */}
        <Text>ProfilePicture</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 100,
    borderRadius: 50,
    width: 100
    
  },
  title: {
    padding: 22,
    color: 'rgba(0,0,0,.8)',
    fontWeight: '300',
    fontSize: 16,
  },
})