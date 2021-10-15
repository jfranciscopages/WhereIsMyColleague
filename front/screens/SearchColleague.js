import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userById } from "../store/usersReducer";
import { StyleSheet, View, Image, Text } from "react-native";
import { Divider, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Button } from "react-native-elements";
import SearchBar from "../components/SearchBar/searchBar";
import { useNavigation } from "@react-navigation/native";
import { setSearchValue } from "../store/searchbar/searchValue";
// import { useState } from "react";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const usersByTitle = useSelector((state) => state.users.usersByTitle);
  const inputValue = useSelector((state) => state.searchValue);
  const [limited, setLimited] = useState(true);
  const limitUserBy5 = usersByTitle.slice(0, 5);

  useEffect(() => {
    dispatch(setSearchValue(""));
    setLimited(true);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <View>
            <Image
              source={{
                uri: `https://secure.meetupstatic.com/photos/event/6/e/2/5/clean_488248197.jpeg`,
              }}
              style={styles.img}
            />
            <Text style={styles.text}>Where Is My Colleague?</Text>
          </View>
        </View>
        <View style={styles.search}>
          <SearchBar />
        </View>
        <View>
          {inputValue.length > 2 && limited === true ? (
            usersByTitle.length > 0 && inputValue.length > 2 ? (
              limitUserBy5.map((user, i) => (
                <View key={i}>
                  <ListItem
                    style={{
                      margin: 5,
                      marginTop: 5,
                      borderStyle: "solid",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#A6CE39",
                      overflow: "hidden",
                    }}
                    onPress={() => {
                      dispatch(userById(user.id));
                      navigation.navigate("userinfo");
                    }}
                  >
                    <ListItem.Title>{`${user.firstName} ${user.lastName}`}</ListItem.Title>
                  </ListItem>
                </View>
              ))
            ) : (
              <ListItem bottomDivider>
                <Text>"No hay match"</Text>
              </ListItem>
            )
          ) : null}
          {inputValue.length > 2 && limited === false ? (
            usersByTitle.length > 0 && inputValue.length > 2 ? (
              usersByTitle.map((user, i) => (
                <View key={i}>
                  <ListItem
                    onPress={() => {
                      console.log(`USUARIO`, user);
                      dispatch(userById(user.id));
                      return navigation.navigate("userinfo");
                    }}
                  >
                    <ListItem.Title>{user.firstName}</ListItem.Title>
                    <ListItem.Subtitle>{user.lastName}</ListItem.Subtitle>
                  </ListItem>
                  <Divider my="1" />
                </View>
              ))
            ) : (
              <ListItem bottomDivider>
                <Text>"No hay match"</Text>
              </ListItem>
            )
          ) : null}
        </View>
        <View style={styles.button}>
          {limited === true &&
          usersByTitle.length > 4 &&
          inputValue.length > 2 ? (
            <Button
              type="solid"
              color="#A1CF6B"
              title="Show More Results"
              icon={{ name: "search", color: "white" }}
              onPress={() => {
                setLimited(false);
              }}
              buttonStyle={{
                minHeight: "100%",
              }}
            ></Button>
          ) : null}
          {limited === false &&
          usersByTitle.length > 4 &&
          inputValue.length > 2 ? (
            <Button
              type="solid"
              color="#A1CF6B"
              style={styles.button}
              title="Show Less Results"
              icon={{ name: "search", color: "white" }}
              onPress={() => {
                setLimited(true);
              }}
              buttonStyle={{
                minHeight: "100%",
              }}
            ></Button>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    height: 30,
    // marginTop: 10,
  },
  button: {
    position: "relative",
    height: 50,
    flex: 1,
    bottom: 0,
    justifyContent: "flex-end",
    color: "#A1CF6B",
    marginBottom: 0,
  },
  homeView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: "bold",
  },
  img: {
    resizeMode: "contain",
    width: 160,
    height: 100,
  },
  header: {
    marginLeft: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    marginTop: 50,
  },
  users: {
    marginTop: 30,
  },
  listUsers: {
    marginTop: 10,
  },
});
