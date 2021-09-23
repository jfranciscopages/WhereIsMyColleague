import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/search")
      .then((data) => console.log(data));
  }, []);

  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.header}>
        <View>
          <Text>Welcome to</Text>
          <Image style={styles.img} source={require("../assets/logo-G.png")} />
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchContainer}>
          <Input
            placeholder="Search by name"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    // alignItems: "center",
    // marginTop: 80,
  },
  img: {
    width: 200,
    height: 50,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    marginTop: 30,
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  // searchContainer: {
  //   // height: 50,
  //   // backgroundColor: "light",
  //   // borderRadius: 10,
  //   // flex: 1,
  //   // flexDirection: "row",
  //   // alignItems: "center",
  // },
  // input: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   // borderRadius: 5,
  //   // borderWidth: 1,
  //   // padding: 5,
  // },
});
