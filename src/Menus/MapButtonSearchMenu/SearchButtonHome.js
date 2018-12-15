
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import Slider from 'react-rangeslider'
import RangeSlider from 'react-native-range-slider'

const SearchButtonHome = (props) => {
    
    if (hide) {
      return null;
    }
    return (
      
        <View
            style={
              {
                // backgroundColor: "\'"+this.state.menuVisible+"\'",
                backgroundColor:this.state.menuVisible,
                height: 330,
                width: 200,
                top: 40,
                zIndex: 2,
                marginBottom: "20%"

                // backgroundColor: 'blue',
                // flex: 1,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center'
              }
            }
            pointerEvents={this.state.menuTouchable}
            >
            
            <RangeSlider
              disableRange={true}
              minValue={0}
              maxValue={100}
              tintColor={'transparent'}
              handleBorderWidth={1}
              handleBorderColor="#454d55"
              selectedMinimum={20}
              selectedMaximum={40}
              style={{ top: 20,
                bottom:20,
                left: 20,
                right: 20,
                backgroundColor: 'blue' }}
              onChange={ (data)=>{ console.log(data);} }
            />
            </View>
      
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
  },
});



export default SearchButtonHome