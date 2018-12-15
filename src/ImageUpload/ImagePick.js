import ImagePicker from 'react-native-image-picker';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native'

import UploadImage from '/Users/anthony/Desktop/Manifest/app8/src/ImageUpload/UploadImage.js';

export default class ImagePick extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            avatarSource:''
        }
      }
    ////////////////  
    handleClick(){
        //This is what pops up to select camera or library
        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };

      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            //Setting state value to whatever was selected from the camera or library  
            avatarSource: source,
          });
          
        }
      })}

    
    ////////////
    
    // uploadFile = (files) => {
    //     let data = new FormData()
    //     data.append('data', files[0])
      
    //     // use the file endpoint
    //     fetch('https://api.graph.cool/file/v1/cjp3334jy8c9q0125gpihcz4s', {
    //       method: 'POST',
    //       body: data
    //     }).then(response => {
    //       return response.json()
    //     }).then(file => {
    //       const fileId = file.id
    //     })
    //   }
    



    render() {
        return(
            <View>
                <Button
                title={"Upload Image"}
                onPress={
                    () => this.handleClick()
                }
                />
                <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
                <Button
                title={"Send to database"}
                onPress={() => this.uploadFile()}
                />
                
            </View>
        );
    }
}



// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Profile Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

const styles = StyleSheet.create({
  uploadAvatar: {
    width: 100,
    height: 100
  },
})
  
