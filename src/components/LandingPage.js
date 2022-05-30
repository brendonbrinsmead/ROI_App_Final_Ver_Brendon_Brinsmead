import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";



const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../images/ROI_meet.png')} resizeMode="cover" style={styles.image}>
        <Image source={require('../images/logo_example01.png')} />
      <Text style={styles.text}>Red Opal Innovations</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#c64c38"
  }
});

export default App;
