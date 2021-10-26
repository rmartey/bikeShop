import React from "react";
import {View, Text, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 

const Login = ({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          style ={{
            width: 150,
            height: 150,
            borderRadius: 20,
            marginBottom: 80,
            transform: [{rotate: "315deg"}]
          }}
          source = {{
            uri: "https://media.istockphoto.com/photos/mountain-biking-on-trail-picture-id1182762582?k=20&m=1182762582&s=612x612&w=0&h=Gk-G1wdD9A71iac-8a8jiTMgjestzDdIhBH_7Tj6W2A="
          }}
        />
        <Text style = {{fontSize:24,color : "black" }}>Welcome to</Text>
        <Text style = {{fontSize:30,color : "black", fontWeight: "600" }}>
          Power Bike Shop
        </Text>
        <TouchableOpacity
          onPress = {() => {
            navigation.navigate("Home")
          }}
          style = {{
            backgroundColor: "#e3e3e3",
            padding: 10,
            marginTop: 20,
            borderRadius:10,
            paddingHorizontal: 60,
            flexDirection: "row",
            alignItems: "center"

          }}
          
        >
          <MaterialCommunityIcons name="gmail" size={24} color="black" style = {{marginRight: 5, color: "red"}}/>
          <Text style = {{fontSize:20, marginLeft: 10}}>
          
            Login with Gmail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {() => {
            navigation.navigate("Home")
          }}
          style = {{
            backgroundColor: "black",
            padding: 10,
            marginTop: 20,
            borderRadius:10,
            paddingHorizontal: 60,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <AntDesign name="apple1" size={24} color="white" />
          <Text style = {{fontSize:20, color: "white", marginLeft:10}}>
          
            Login with Apple
          </Text>
        </TouchableOpacity>
        <Text style = {{marginTop: 10}}>
          Not a member?
          <TouchableOpacity>

          <Text style = {{color: "orange"}}> Signup</Text> 
          </TouchableOpacity>
        </Text>

      </View>
    );
  }
  export default Login;