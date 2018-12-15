import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default class Info extends React.Component {

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    // Image.getSize(this.props.imageUrl, (width, height) => {
    //   const imageHeight =  250
    //   const scaleFactor = height / imageHeight
    //   const imageWidth = width / scaleFactor
    //   this.setState({width: imageWidth, height: imageHeight})
    // })
  }

  render () {
    
    return (
      <View>
        <View style={styles.imageContainer}>
          {/* <Image
            source={{ uri: this.props.imageUrl }}
            style={{width, height}}
            resizeMode='contain'
          /> */}

        
        
        <Text style={styles.title}>
          {this.props.description}
        </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.07)',
    marginBottom: 5,
    
  },
  title: {
    padding: 22,
    color: 'rgba(0,0,0,.8)',
    fontWeight: '300',
    fontSize: 16,
  },
})