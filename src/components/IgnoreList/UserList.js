import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '/Users/anthony/Desktop/Manifest/app8/src/components/ListItem/ListItem.js';

const UserList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => alert('Item pressed - ID: '+i)}/>
      ));
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;