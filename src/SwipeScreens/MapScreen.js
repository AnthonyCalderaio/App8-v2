import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import RangeSlider from 'react-native-range-slider' //Not using yet

import ActionButton from 'react-native-action-button'; //Not using currently
import Icon from 'react-native-vector-icons/Ionicons'; //Not using currently
import { FloatingAction } from 'react-native-floating-action';
//import 'react-rangeslider/lib/index.css'

import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { SlideInMenu } = renderers;

//Goes to react-native-floating-action


class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: "",
      longitude: "",

      error: "",


      searchSettingsMenuEnabled: false,
      menuTouchable: "none",
      menuVisible: "transparent",
      isHidden: true,
      sliderVisible: 0,
      sliderZIndex: -1


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

  _onMapReady = () => this.setState({ marginBottom: 0 })

  _shuffleUsers = () => alert('users shuffled')

  _searchSettingsMenu= () => {

    // function that will toggle active/false
    this.setState(prevState => ({
      searchSettingsMenuEnabled: !prevState.searchSettingsMenuEnabled
    }));
    
    //MENU TOUCHABLE
      if (this.state.menuTouchable==="none"){
        this.setState(prevState => ({
          menuTouchable: "auto"
        }));
      }
      if (this.state.menuTouchable==="auto"){
        this.setState(prevState => ({
          menuTouchable: "none"
        }));
      }

    //MENU VISIBLE
    if (this.state.menuVisible==="transparent"){
      this.setState(prevState => ({
        menuVisible: "blue"
      }));
    }
    if (this.state.menuVisible==="blue"){
      this.setState(prevState => ({
        menuVisible: "transparent"
      }));
    }

    //Slider1 visible
    if (this.state.sliderVisible===0){
      this.setState(prevState => ({
        sliderVisible: 1
      }));
    }
    if (this.state.sliderVisible===1){
      this.setState(prevState => ({
        sliderVisible:0
      }));
    }
    //Slider 1 z-index
    if (this.state.sliderZIndex===-1){
      this.setState(prevState => ({
        sliderZIndex: 2
      }));
    }
    if (this.state.sliderZIndex===2){
      this.setState(prevState => ({
        sliderZIndex:-1      }));
    }

      //TESTING
      // alert("searchSettingenabled"+this.state.searchSettingsMenuEnabled+"\n"+
      //       "menuTouchable: "+this.state.menuTouchable+"\n"+
      //       "menuVisible: "+this.state.menuVisible
      // )
    }
  

  render() {
    let { volume } = this.state

    const actions = [{
      text: 'Profile',
      icon: require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg'),
      name: 'bt_profile',
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
      <View style={styles.container}>
      

      
        <MapView style={styles.map}
          showsUserLocation={true}
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

            coordinate={{
              latitude: this.state.latitude + 0.3,
              longitude: this.state.longitude - 0.55
            }}
            title={"James"}
            description={"1) Sailing 2) Programming 3) Dining"}
            image={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/james.jpg')}
          />
          <MapView.Marker
            coordinate={{
              latitude: 36.78825,
              longitude: -124.4324
            }}
            title={"James"}
            description={"description"}
          />
        </MapView>
        {/* <View
            style={
              {
                // backgroundColor: "\'"+this.state.menuVisible+"\'",
                backgroundColor:this.state.menuVisible,
                height: 330,
                //height:0,
                width: 200,
                top: 40,
                //zIndex: this.state.sliderZIndex,
                marginBottom: "20%"

                // backgroundColor: 'blue',
                // flex: 1,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center'
              }
            }
            //pointerEvents={this.state.menuTouchable}
            >
            
            <RangeSlider
              //disableRange={true}
              minValue={0}
              maxValue={100}
              tintColor={'#da0f22'}
              handleBorderWidth={1}
              handleBorderColor="#454d55"
              selectedMinimum={20}
              selectedMaximum={40}
              style={{ 
                opacity: this.state.sliderVisible,
                top: 30,
                bottom:20,
                left: 20,
                right: 20,
                backgroundColor: 'blue' }}
              onChange={ (data)=>{ console.log(data);} }
            />
            <RangeSlider
              //disableRange={true}
              minValue={0}
              maxValue={100}
              tintColor={'#da0f22'}
              handleBorderWidth={1}
              handleBorderColor="#454d55"
              selectedMinimum={20}
              selectedMaximum={40}
              style={{ 
                opacity: this.state.sliderVisible,
                top: 90,
                bottom:20,
                left: 20,
                right: 20,
                backgroundColor: 'white' }}
              onChange={ (data)=>{ console.log(data);} }
            />
            <RangeSlider
              //disableRange={true}
              minValue={0}
              maxValue={100}
              tintColor={'#da0f22'}
              handleBorderWidth={1}
              handleBorderColor="#454d55"
              selectedMinimum={20}
              selectedMaximum={40}
              style={{ 
                opacity: this.state.sliderVisible,
                top: 150,
                bottom:20,
                left: 20,
                right: 20,
                backgroundColor: 'yellow' }}
              onChange={ (data)=>{ console.log(data);} }
            />
            </View> */}


        {/*  -----------------container------------------- */}
        {/* <View style={styles.bottomView}> */}
              
        

          {/* <View style={styles.buttons}> */}
            

            {/* <MenuProvider>
              <Menu

                name="numbers" renderer={SlideInMenu} onSelect={value => this.selectNumber(value)}
                onClose={() => this.addLog('menu is closing')}
              >
                <MenuTrigger style={styles.trigger}>
                  
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={{}}
                  customStyles={{
                    optionText: [styles.text,
                    styles.slideInOption
                      //styles.dialogOption
                    ]
                  }}>
                  <MenuOption value={1} text='Option one' />
                  <MenuOption value={2} text='Option two' />
                  
                </MenuOptions>
              </Menu>
            </MenuProvider> */}
{/* 
            <TouchableWithoutFeedback
            onPress={()=>this._shuffleUsers()}
            >
              <Image
                style={styles.button1}
                source={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/icons/shuffleIcon.png')}
              />
              
            </TouchableWithoutFeedback>
            
              <TouchableWithoutFeedback
              onPress={()=>this._searchSettingsMenu()}
              >
                
                <Image
                    style={styles.button1}
                    source={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/icons/shuffleIcon.png')}
                  />
            </TouchableWithoutFeedback>
             */}
             {/*Right action button*/}
             
            {/* <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          </ActionButton> */}
          



          
            {/* <TouchableWithoutFeedback>
              
              <Image
                style={styles.button1}
                source={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/icons/shuffleIcon.png')}
              />
            </TouchableWithoutFeedback> */}




      <FloatingAction
        actions={actions}
        position={"right"}
        onPressItem={
          (name) => {
            if (name === "bt_profile"){
            //Testing Purposes
             alert('works')
            // return
            this.props.navigation.navigate('ProfileScreen')
             return
            }
            alert(`selected button: ${name}`)
          }
        }
      />
       <FloatingAction
       position={"center"}
        actions={actions}
        onPressItem={
          (name) => {
            alert(`selected button: ${name}`);
          }
        }
      />
      <FloatingAction
      floatingIcon={require('/Users/anthony/Desktop/Manifest/app8/src/assets/imgs/default_image.jpg')}
       position={"left"}
        actions={actions}
        onPressItem={
          (name) => {
            alert(`selected button: ${name}`)
          }
        }
      />
            
           
          {/* </View> */}
        {/* </View>  */}


      </View>
    );
  }
}

export default MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // flexDirection: 'column'
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
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    //bottom: 600,
    height:450,alignSelf:'stretch',backgroundColor:'pink',margin:5
  },
  bottomView: {

    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    //zIndex: 1,
    //position: 'absolute',
    // backgroundColor: 'blue',
     //justifyContent: 'space-between',
    // alignItems: 'stretch',
    // flex: 1,


    flex:1,alignItems:'center',justifyContent:'center',alignSelf:'stretch',backgroundColor:'blue',margin:5
  },
  button1: {
    //borderWidth: 1,
    //borderRadius:25,
    width: 30,
    height: 30,
     padding: 50
  },
  // MenuContainer: {
  //   width: 30
  // },
  slideInOption: {
    padding: 5,
  },
  trigger: {
    padding: 5,
    margin: 5,
  },
  buttons: {
    // justifyContent: 'center',
    // position: "absolute", 
    // bottom: 0,
    // flexDirection: 'row',
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    //marginTop: 450
  },
  searchSettingsMenuStyle: {
    top: 20,
    bottom:20,
    left: 20,
    right: 20,
    backgroundColor: 'blue'
  }
});