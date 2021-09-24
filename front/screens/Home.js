import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersByTitle, setUsers } from "../store/usersReducer";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, ListItem, Avatar } from "react-native-elements";
import SearchBar from "../components/SearchBar/searchBar";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const usersByTitle = useSelector((state) => state.usersByTitle);
  const allUsers = useSelector((state) => state.allUsers);
  const inputValue = useSelector((state) => state.searchValue);

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.header}>
        <View>
          <Text>Welcome to</Text>
          {console.log("ALL USERS ==>", allUsers)}
          {console.log(`USER BY TITLE ==>`, usersByTitle)}
          {console.log("INPUT VALUE==>", inputValue)}
          <Image style={styles.img} source={require("../assets/logo-G.png")} />
        </View>
      </View>
      <View style={styles.search}>
        {/*   <View style={styles.searchContainer}>
          <Input
            placeholder="Search by name"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={(e) => handleChangeSearchBar(e)}
          />
        </View> */}
        <SearchBar />
      </View>
      <View style={styles.users}>
        {inputValue.length > 2 ? (
          usersByTitle.length > 0 && inputValue.length > 2 ? (
            usersByTitle.map((user) => (
              <ListItem bottomDivider>
                {console.log("user===>", user)}
                <Avatar
                  rounded
                  source={{
                    uri: `${user.avatar}`,
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title
                    onPress={() => navigation.navigate("userdetail")}
                  >
                    {user.firstName}
                  </ListItem.Title>
                  <ListItem.Subtitle>{user.lastName}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          ) : (
            <ListItem bottomDivider>
              <Text>"No hay match"</Text>
            </ListItem>
          )
        ) : (
          <ListItem bottomDivider>
            <Text>"Haz una busqueda"</Text>
          </ListItem>
        )}
      </View>
    </SafeAreaView>
  );
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
});
