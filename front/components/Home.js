import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/usersReducer";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  const users = useSelector((state) => state.users);

  const handleChangeSearchBar = (value) => {
    console.log(value);
    /*  setSearchedUsers([]);
    if (value.length > 3) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].firstName.includes(value)) {
          setSearchedUsers(() => [...searchedUsers, users[i]]);
        }
      }
    } */
    dispatch(setUsers(value));
  };
  console.log(searchedUsers);
  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.header}>
        <View>
          <Text>Welcome to</Text>
          {console.log(`Muestra los Users`, users)}
          <Image style={styles.img} source={require("../assets/logo-G.png")} />
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchContainer}>
          <Input
            placeholder="Search by name"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={(e) => handleChangeSearchBar(e)}
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
