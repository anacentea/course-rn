import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
          <Text style={styles.text}>HomeScreen</Text>
          <Button title="Go to demo components" 
            // onPress={() => console.log("props are " + navigation)}
            onPress={() => navigation.navigate("Components")}
            /> 
          <TouchableOpacity
            onPress={() => navigation.navigate("List")} 
            > 
            <Text> Go </Text>
            <Text> To </Text>
            <Text> List </Text>
            <Text> View </Text>
          </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
