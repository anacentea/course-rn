import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const ImageDetail = ({ title, imageSource, blurRadius, forDownload=false}) => {
  console.log("image source is: " + imageSource);
  let [computedWidth, setComputedWidth] = useState(1);
  let [computedHeight, setComputedHeight] = useState(1);

  if (forDownload) {
    Image.getSize(imageSource, 
                (width, height)=> {
                let screenWidth = Dimensions.get('screen').width;
                if (width > screenWidth) {
                  setComputedWidth(screenWidth);
                  setComputedHeight(screenWidth * height/width);
                } else {
                  setComputedWidth(width);
                  setComputedHeight(height);
                }
              },
              (error) => { console.log("failed to get size of photo") });
  }
  
  return (
    <View style={styles.container}>
      <Image style={{flex:1}}
      source={imageSource}

      blurRadius={blurRadius}
      onError={({ nativeEvent: {error} }) => {
        console.log("error :"+ error)
       }}

      onLoad={() => {
        console.log("on load " + title)
      }}

      style={
        forDownload ? {
        width: computedWidth,
        height: computedHeight
      } : {} }
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#b8ffc0',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    position: 'relative'
  },
});

export default ImageDetail;
