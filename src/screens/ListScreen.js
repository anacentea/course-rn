import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text>List Screen Demo</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        title: {
            fontSize: 20
        }
    }
)

export default ListScreen;

// TODO: create component to reuse
// create a component button to reuse
// have as parameters call back and title