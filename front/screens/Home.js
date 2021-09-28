import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userById } from "../store/usersReducer";
import { StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Button } from "react-native-elements";
import SearchBar from "../components/SearchBar/searchBar";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const usersByTitle = useSelector((state) => state.users.usersByTitle);
  const inputValue = useSelector((state) => state.searchValue);

  const mapHandler = (id) => {
    dispatch(userById(id));
    navigation.navigate("map");
  };

  return (
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
      <View style={styles.listUsers}>
        {inputValue.length > 2 ? (
          usersByTitle.length > 0 && inputValue.length > 2 ? (
            usersByTitle.map((user, i) => (
              <ListItem.Swipeable
                key={i}
                leftContent={
                  <Button
                    title="Info"
                    icon={{ name: "info", color: "white" }}
                    buttonStyle={{ minHeight: "100%" }}
                    onPress={() => {
                      console.log(`USUARIO`, user);
                      dispatch(userById(user.id));
                      return navigation.navigate("userinfo");
                    }}
                  />
                }
                rightContent={
                  <Button
                    title="Locate"
                    icon={{ name: "search", color: "white" }}
                    buttonStyle={{
                      minHeight: "100%" /* , backgroundColor: "green" */,
                    }}
                    onPress={() => mapHandler(user.id)}
                  />
                }
              >
                <ListItem.Content>
                  <ListItem.Title>{user.firstName}</ListItem.Title>
                  <ListItem.Subtitle>{user.lastName}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            ))
          ) : (
            <ListItem bottomDivider>
              <Text>"No hay match"</Text>
            </ListItem>
          )
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 150,
  },
  users: {
    marginTop: 30,
  },
  listUsers: {
    marginTop: 10,
  },
});
