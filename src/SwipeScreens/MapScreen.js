import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class MapScreen extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: "",
          longitude: "",
          
          error: "",
        };
      }

      componentDidMount() {
        this.watchId = navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              // latitude: 26.88,
              // longitude: 80.10,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
        );
      }

    _onMapReady = () => this.setState({marginBottom: 0})


  render() {
      
      
  

    return (
      <View style={styles.container}>
       <MapView style={styles.map}
            showsUserLocation = {true}
            onMapReady={this._onMapReady}
            //onRegionChange={regionChangeHandler(this.re, lastLat, lastLong)}
            region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034,
            }}
        >
        <MapView.Marker
            
            coordinate={{latitude: this.state.latitude+0.3,
            longitude: this.state.longitude-0.55}}
            title={"James"}
            description={"1) Sailing 2) Programming 3) Dining"}
            image={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/james.jpg') } 
         />
        <MapView.Marker
            coordinate={{latitude: 36.78825,
            longitude: -124.4324}}
            title={"James"}
            description={"description"}
         /> 
       </MapView>
        


        {/* <Text> {this.state.latitude} </Text>
        <Text> {this.state.longitude} </Text>
        <Text> {this.state.error} </Text> */}
      </View>
    );
  }
}

export default MapScreen;


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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
