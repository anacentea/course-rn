import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text>Components Screen Demo</Text>
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

export default ComponentsScreen;