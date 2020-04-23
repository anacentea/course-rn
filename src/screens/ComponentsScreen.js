import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const ComponentsScreen = (props) => {
    let [isImgLoaded, setImageLoaded] = useState(false);
    let logo = 'https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg';
 
    return (
      <View style={{flex:1}}>
              <Image 
              source={{
                uri: logo,
              }}
              onLoad={()=> {setImageLoaded(true); console.log('s-a incarcat')}}
              style={isImgLoaded ? {flex:1 , resizeMode: "contain"} : {display: "none"}}
              ></Image>
              <Image 
              source={{
                uri: logo,
              }} 
              onLoad={()=> {setImageLoaded(true); console.log('s-a incarcat')}}
              style={isImgLoaded ? {flex:1, resizeMode: "contain"} : {width:1}}
              ></Image>
      </View>
    );
}

const style = StyleSheet.create(
    {
        title: {
            fontSize: 20
        }
    }
)

export default ComponentsScreen;