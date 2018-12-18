
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
    static navigationOptions = {
        
      title:"Profile",
    //For image in header
    //   headerTitle: (
    //     <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    //         <Image
    //             source={image}
    //             style={{width:110, height:18}}
    //         />
    //     </View>
    // ),

      headerLeft: null,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#0D0D0D'
      }
     
  }




  render() {
    const actions = [
    //   {
    //   text: 'Profile',
    //   icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
    //   name: 'bt_accessibility',
    //   position: 2
    // }, 
    {
      text: 'Map',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_map',
      position: 1
    },
    {
      text: 'Infinity Wall',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_wall',
      position: 1
    },
    {
      text: 'Buesiness Wall',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_business',
      position: 1
    },
  ];
    return (
      <View 
      style={styles.container}
      >
       
         <MyProfile/>
         {/* <ImagePick/> */}
         <FloatingAction
         styles={{bottom: 10}}
         //floatingIcon={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg')}
         position={"right"}
         actions={actions}
         onPressItem={
        (name) => {
            if (name === "bt_map"){
           this.props.navigation.navigate('Map')
            }
            if (name === "bt_wall"){
              this.props.navigation.navigate('Wall')
               }
               if (name === "bt_business"){
                this.props.navigation.navigate('Business')
                 }
            
         }
        }
      />
        </View>
    );
  }

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);
export default ProfileScreen;
