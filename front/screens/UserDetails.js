import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersByTitle, setUsers, setSingleUser } from "../store/usersReducer";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, ListItem, Avatar } from "react-native-elements";
import SearchBar from "../components/SearchBar/searchBar";

export default function UserDetails({ navigation }){

    const singleUser = useSelector((state) => state.singleUser);
    return(
        <SafeAreaView style={styles.homeView}>
            {console.log("singleUser==>", singleUser)}
            <View /* style={styles.header} */>
            <ListItem.Title  style={styles.fistName}>{/* <Text style={styles.generic}>name</Text> */}{singleUser.firstName}</ListItem.Title>
            <ListItem.Subtitle>{singleUser.lastName}</ListItem.Subtitle>
            
            </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    homeView: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: "white",
    },
    img: {
      width: 200,
      height: 50,
    },
    header: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "center",
    },
    search: {
      marginTop: 30,
    },
    users: {
      marginTop: 30,
      backgroundColor: "yellowgreen",
    },
    text: {},
    fistName: {
        fontSize:55
    },
    lasName:{
        fontSize:25 
    },
    generic:{
        fontSize:20
    }
  });