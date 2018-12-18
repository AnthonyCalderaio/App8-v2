import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Profiles from '/Users/anthony/Desktop/Manifest/app8/src/Profiles/Profiles.js';
import { FloatingAction } from 'react-native-floating-action';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



class SocialScreen extends React.Component {
  static navigationOptions = {
        
    title:"Infinity Wall",
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
    const actions = [{
      text: 'Profile',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_profile',
      position: 2
    }
    ,{
      text: 'Chat',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_room',
      position: 3
    }
    ,{
      text: 'Infinity Wall',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_wall',
      position: 4
    }
  ];
    return (
      <View style={styles.container}>
       <Profiles/>
       <FloatingAction
        floatingIcon={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/icons/mapIcon.png')}
        actions={actions}
        position={"right"}
        onPressItem={
          (name) => {
             if (name === "bt_profile"){
            this.props.navigation.navigate('Profile')
             }
             if (name === "bt_wall"){
              this.props.navigation.navigate('Wall')
               }
          }
        }
      />
      </View>
    );
  }
}

export default SocialScreen;


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

