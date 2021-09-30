import React from "react";
import { VStack, HStack, Avatar, Image, Text } from "native-base";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { List } from "react-native-paper";

function UserDetails() {
  const userById = useSelector((state) => state.users.userById);
  return (
    <View style={styles.view}>
      <View style={styles.firstBackground}>
        {userById.id ? (
          <VStack m={4} space={4} borderRadius="lg">
            <HStack alignItems="center" px={4} pt={4} style={styles.nameStyle}>
              <Avatar
                source={{
                  uri: `${userById.avatar}`,
                }}
              />
              <VStack ml={2} space={2}>
                <Text fontSize="lg" bold>
                  {userById.firstName}
                  {userById.lastName}
                </Text>
              </VStack>
            </HStack>
            <View style={styles.viewImg}>
              <Image
                w="100%"
                style={styles.img}
                height={72}
                source={{
                  uri: `http://lorempixel.com/400/400/city/gray/`,
                }}
                alt="NativeBase logo"
              ></Image>
            </View>
            <VStack px={4} pb={4}>
              <Text style={styles.text}>
                <Text style={styles.text} bold>
                  {userById.firstName}
                </Text>{" "}
                works in{" "}
                <Text style={styles.text} bold>
                  {userById.city}
                </Text>{" "}
                , {userById.country}.
              </Text>
            </VStack>
            <View>
              <List.Item
                title="Email"
                description={userById.email}
                left={(props) => <List.Icon {...props} icon="email" />}
              />
              <List.Item
                title="Email"
                description={userById.email}
                left={(props) => <List.Icon {...props} icon="email" />}
              />
            </View>
          </VStack>
        ) : (
          <Text>"LOADING.."</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstBackground: {
    backgroundColor: "#A5CC6B",
    height: 300,
    zIndex: 1,
    borderRadius: 25,
    marginTop: -50,
    paddingTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    backgroundColor: "#A5CC6B",
    fontSize: 20,
    marginTop: 5,
    width: 400,
    backgroundColor: "#A1CF6B",
    height: 50,
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 50,
    marginLeft: -55,
    borderRadius: 12,
    shadowColor: "#000",
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  viewImg: {
    borderRadius: 25,
    shadowColor: "#000",
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    backgroundColor: "#0000",
    elevation: 10,
  },
  nameStyle: {
    borderRadius: 15,
    backgroundColor: "#A1CF6B",
    height: 60,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  img: {
    borderRadius: 25,
  },
});
export default UserDetails;
