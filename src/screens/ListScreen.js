import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageDetail from "../components/ImageDetail";
import { ScrollView } from 'react-native-gesture-handler';

const ListScreen = (props) => {
    console.log("created list screen");
    let image_URL={ uri: 'https://picsum.photos/200' }; 

    return (
        <ScrollView style={styles.container}>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
            ></ImageDetail>
            <Text>Blurred images</Text>
            <ImageDetail
                title="Ball"
                imageSource={require("../../assets/73-200x200.jpg")}
                bluRadius={0}
            ></ImageDetail>
            <ImageDetail
                title="Ball blur 1"
                imageSource={require("../../assets/73-200x200.jpg")}
                bluRadius={1}
            ></ImageDetail>
            <ImageDetail
                title="Ball blur 2"
                imageSource={require("../../assets/73-200x200.jpg")}
                bluRadius={2}
            ></ImageDetail>
                <ImageDetail
                title="Ball blur 3"
                imageSource={require("../../assets/73-200x200.jpg")}
                bluRadius={3}
            ></ImageDetail>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#a5e9fa',
    },
  });
  
export default ListScreen;
