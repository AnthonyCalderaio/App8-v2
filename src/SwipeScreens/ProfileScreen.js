
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet,  View, Text} from 'react-native';
import MyProfile from '/Users/anthony/Desktop/Manifest/app8/src/Profiles/MyProfile.js';
import ImagePick from '/Users/anthony/Desktop/Manifest/app8/src/ImageUpload/ImagePick.js';
import { FloatingAction } from 'react-native-floating-action';

//import profile from '/Users/anthony/Desktop/Manifest/App6/src/profileData/profile.js';
class ProfileScreen extends React.Component {

  state = {
    Users: []
  };

    constructor(props) {
      super(props);
  
      this.state = {
        isLoadingComplete: false,
      };
    }
  render() {
    const actions = [{
      text: 'Profile',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_accessibility',
      position: 2
    }, {
      text: 'Location',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_language',
      position: 1
    }, {
      text: 'Chat',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_room',
      position: 3
    }, {
      text: 'Video',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_videocam',
      position: 4
    }];
    return (
      <View>
       
         <MyProfile/>
         <ImagePick/>
         <FloatingAction
      floatingIcon={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg')}
       position={"right"}
        actions={actions}
        onPressItem={
          (name) => {
            console.log(`selected button: ${name}`);
          }
        }
      />
        </View>
    );
  }

  
}


export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);
