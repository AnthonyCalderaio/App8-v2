
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import Slider from 'react-rangeslider'

export default class Example extends Component {


  constructor(props) {
    super(props);

    this.state = {
     
        volume: 0
    };
  }




  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }


  render() {
    let { volume } = this.state
    return (
      
        
    //     <Slider
    //     value={volume}
    //     orientation="vertical"
    //     onChange={this.handleOnChange}
    //   />

        
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'dimgray',
    paddingTop : 15,
  },
  trigger: {
    padding: 5,
    margin: 5,
  },
  triggerText: {
    color: 'white',
  },
  disabled: {
    color: '#ccc',
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logView: {
    flex: 1,
    flexDirection: 'column',
  },
  logItem: {
    flexDirection: 'row',
    padding: 8,
  },
  slideInOption: {
    padding: 50
  },
  text: {
    fontSize: 18,
  },
});