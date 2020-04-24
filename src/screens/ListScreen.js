import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageDetail from "../components/ImageDetail";
import { ScrollView } from 'react-native-gesture-handler';

const ListScreen = (props) => {
    console.log("created list screen");
    let image_URL={ uri: 'https://picsum.photos/200/300' }; 
    let image_URL2={ uri: 'https://picsum.photos/300/300' }; 
    let image_URL3={ uri: 'https://picsum.photos/400/500' }; 
    let image_URL4={ uri: 'https://picsum.photos/500/600' }; 
    let image_URL5={ uri: 'https://picsum.photos/40/60' }; 


    return (
        <ScrollView style={styles.container}>
            <ImageDetail
                title="Downloaded photo"
                imageSource={{uri:'https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'}}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL2}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL3}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL4}
                forDownload={true}
            ></ImageDetail>
            <ImageDetail
                title="Downloaded photo"
                imageSource={image_URL5}
                forDownload={true}
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
