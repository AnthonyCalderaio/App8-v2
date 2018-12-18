import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class BusinessScreen extends React.Component {
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
    ,{
      text: 'Map',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_map',
      position: 4
    }
  ];
    return (
      <View style={styles.container}>
        <Text>Business</Text>
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
               if (name === "bt_map"){
                this.props.navigation.navigate('Map')
                 }
          }
        }
      />
      </View>
    );
  }
}

export default BusinessScreen;


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

