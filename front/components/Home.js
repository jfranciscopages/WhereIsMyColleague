import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersByTitle, setUsers } from "../store/usersReducer";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, ListItem, Avatar } from "react-native-elements";


export default function Home({ navigation }) {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const dispatch = useDispatch();
  const usersByTitle = useSelector((state) => state.usersByTitle);
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  const handleChangeSearchBar = (value) => {
    console.log(value);
    if (value.length < 3) {
      return;
    } else {
      dispatch(setUsersByTitle(value));
    }
  };
  console.log(searchedUsers);
  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.header}>
        <View>
          <Text>Welcome to</Text>
          {console.log("ALL USERS ==>", allUsers)}
          {console.log(`USER BY TITLE ==>`, usersByTitle)}
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
      <View style={styles.users}>
        {usersByTitle.map((user) => (
          <ListItem bottomDivider>
            <Avatar
              rounded
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title onPress={() => navigation.navigate("userdetail")}>
                {user.firstName}
              </ListItem.Title>
              <ListItem.Subtitle>{user.lastName}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
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
    justifyContent: "space-between",
  },
  search: {
    marginTop: 30,
  },
  users: {
    marginTop: 30,
  },
});
