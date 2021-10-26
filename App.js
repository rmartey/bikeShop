import * as React from "react";
import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../first/screens/login";
import Home from "../first/screens/home";
import Cart from "../first/screens/cart";

const mainNavigator = createNativeStackNavigator();

const App = ()=> {
   

  return (
    <View style ={{flex: 1}}>
      <NavigationContainer>
        <mainNavigator.Navigator 
          initialRouteName = "Home"
          screenOptions = {{headerShown: false}}
        >

          <mainNavigator.Screen name = "Login" component = {Login} />
          <mainNavigator.Screen name = "Home" component = {Home} />
          {/*<mainNavigator.Screen name = "Cart" component = {Cart} />*/}

        </mainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 



export default App;
