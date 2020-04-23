import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageSource, blurRadius }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource}  blurRadius={blurRadius}
      onError={({ nativeEvent: {error} }) => {
        console.log("error :"+error)
       }}

      onLoad={() => {
        console.log("on load " + title)
      }}

      onLoadEnd={() => {
        console.log("on load end " + title)
      }}
      
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#b8ffc0',
  },
});

export default ImageDetail;
