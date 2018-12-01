
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet,  View, Text} from 'react-native';


//import profile from '/Users/anthony/Desktop/Manifest/App6/src/profileData/profile.js';
class ProfileScreen extends React.Component {

  state = {
    Users: []
  };

    constructor(props) {
      super(props);
  
      // this.client = new ApolloClient({
      //   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
      // });

  
      this.state = {
        isLoadingComplete: false,
      };
    }


  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       <ApolloProvider client={this.client}>
    //         <profile />
    //       </ApolloProvider>
    //     </View>
    //   );
    // }

    
    return (
      <View>
       <Text>Profile</Text>
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
