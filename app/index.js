import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
class MusicApp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end"
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/bg.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 3, justifyContent:'center'}}>
            <View style={{...styles.button}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>
                    Sign In
                </Text>
            </View>
            <View style={{...styles.button, backgroundColor:"#00cec9"}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>
                    SIGN IN WITH GOOGLE
                </Text>
            </View>
        </View>
      </View>
    );
  }
}

export default MusicApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button:{
      backgroundColor:"white",
      height:70,
      borderRadius:35,
      marginHorizontal:50,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:5

  }
});
