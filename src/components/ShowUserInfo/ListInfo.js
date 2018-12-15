import React from 'react'
import Info from '/Users/anthony/Desktop/Manifest/app8/src/components/ShowUserInfo/Info.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  View,
  TouchableHighlight,
  ListView,
  Modal,
  StyleSheet,
  Text
} from 'react-native'
//import CreatePage from './CreatePage'




const UserQuery = gql`
query {
    User(id: "cjpa9ea7z0vk7012153b3b0b3") {
    name
    age
    phone
    }
  }`


class ListInfo extends React.Component {

constructor(props) {
  super(props)
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  this.state = {
    dataSource: ds.cloneWithRows([]),
    name: '',
    age: '',
    phone: ''
    // modalVisible: false,
    // user: undefined,
  }

}

componentWillReceiveProps(nextProps) {
  if (!nextProps.UserQuery.loading && !nextProps.UserQuery.error) {
    const {dataSource} = this.state
    this.setState({
      dataSource: dataSource.cloneWithRows(nextProps.UserQuery.User),
      //dataSource: dataSource.cloneWithRows(nextProps.allUsersQuery.allUsers),
      
    })
    //alert('hey1')
  }
  if (nextProps.UserQuery.error){
    alert('there was an error'+`${nextProps.UserQuery.error}`)
  }
}

render () {
  if (this.props.UserQuery.loading) {
    //alert('hey2')
    return (
    <Text>Loading</Text>
  )
  }

  return (
    
    <View >
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(user) => (
          <Info
            description={user}
            
            //imageUrl={user.d}
          />
          

          // <Text>{user.name}</Text>
          // <Text>{user.dateOfBirth}</Text>
        )}
      />
      {/* <TouchableHighlight
        style={styles.createPostButtonContainer}
        onPress={this._createPost}
      >
        <Text style={styles.createPostButton}>Create Post</Text>
      </TouchableHighlight> */}
    </View>
  )
}

// _createPost = () => {
//   // this.props.router.push('/create');
//   this.setState({modalVisible: true})
//   //alert('hey3')
// }
}



const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 22,
  justifyContent: 'center',
  alignItems: 'center',
},
createPostButtonContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},
createPostButton: {
  backgroundColor: 'rgba(39,174,96,1)',
  color: 'white',
  textAlign: 'center',
  fontSize: 22,
  height: 60,
  width: 480,
  paddingTop: 18,
}
})

export default graphql(UserQuery, {name: 'UserQuery'})(ListInfo)