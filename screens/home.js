import React, {useState} from "react";
import {View, Text, Touchable, FlatList, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons,FontAwesome5, EvilIcons} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";


const bikeData = [
  {
    id: 1,
    bikeName: "Neo",
    price: "$1,700.00",
    image: "https://5.imimg.com/data5/SK/RN/NG/ANDROID-94782361/1570778078278-jpg-500x500.jpg"
  },
  {
    id: 2,
    bikeName: "Junior Fat Tyre Bike",
    price: "$1,700.00",
    image: "https://5.imimg.com/data5/CP/EK/EZ/SELLER-1530180/junior-bycycle-500x500.jpg"
  },
  {
    id: 3,
    bikeName: "Ridgeyard Fat Bike",
    price: "$1,700.00",
    image: "https://m.media-amazon.com/images/I/7117rsc0BaL._AC_SX569_.jpg"
  },
  {
    id: 4,
    bikeName: "Wild Wolf Bike",
    price: "$1,700.00",
    image: "https://m.media-amazon.com/images/I/81u5Sj-pYNL._SX425_.jpg"
  }
]


const categories = [
  {
    id: 1,
    title: "ALL"
  },
  {
    id: 2,
    title: "Road Bike"
  },
  {
    id: 3,
    title: "Touring Bike"
  },
  {
    id: 4,
    title: "Mounting Bike"
  }
]

const bike = (bikeName, price, image) =>{
  return(
    <View>
      <Image
        source = {{uri:image}}
      >

      </Image>
      <Text>
        {[bikeName, price]}
      </Text>
    </View>
  )
}

const cat = (title) =>{
  return (
    <View>
      <Text >
        {title}
      </Text>
    </View>
  );
};


const Home = ()=> {
  return (
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30}}>
        <View style={{marginTop:20, flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>

          <FontAwesome5 name="motorcycle" size={24} color="black" />
          
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity>
              <EvilIcons name="search" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="notifications-circle" size={24} color="black" />
            </TouchableOpacity>
            </View>

        </View>

        <View style = {{marginTop:20}}>
          <Text>
            The workers <Text style ={{color: "orange", fontWeight:"600", fontSize: 20, marginLeft: 5}}>Best Bike</Text>
          </Text>
        </View>

        <View>
          <Text style={{color: "black", fontWeight: "bold", fontSize: 25}}>
            Categories
          </Text>
        </View>

        <View >
          <FlatList
            data = {categories}
            horizontal
            renderItem = {({item}) =>(
              <Text style = {styles.listItems} >{item.title}</Text>
            )}
          />
        </View>

        <View>
          <FlatList 
            data = {bikeData}
            renderItem = {({item}) =>(
              <Text style = {styles.bikeItems}>
                {[item.bikeName, item.price]}
              </Text>
            )}

          />
        </View>

      </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    backgroundColor: "grey",
    color: "white",
    margin: 10,
    padding: 5,
    borderRadius:5,
    width:150,
    textAlign: "center",


  },

  bikeItems: {
    margin: 10,
    backgroundColor: "grey",
    height: 200,
    width: 200,
    padding: 10,
    borderRadius: 15,


  }

  

});

export default Home;