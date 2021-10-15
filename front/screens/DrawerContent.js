import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut, setProfile } from "../store/profileReducer";
import { View, StyleSheet } from "react-native";
import { useTheme, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { userById } from "../store/usersReducer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, useToast, Avatar } from "native-base";

export default function DrawerContent(props) {
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile);
  const userLogged = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    dispatch(setProfile({}));
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="4" rounded="sm" mt={70}>
            Goodbye!
          </Box>
        );
      },
    });
  };

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const handleUser = async (id) => {
    await dispatch(userById(id));
    navigation.navigate("userinfo");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {loading ? (
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar
                  source={{
                    uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                  }}
                >
                  SS
                </Avatar>
                <TouchableOpacity
                  style={{ marginLeft: 15, flexDirection: "column" }}
                  onPress={() => handleUser(user.id)}
                >
                  <Title style={styles.title}>{user.firstName}</Title>
                  <Caption style={styles.caption}>{user.email}</Caption>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                {/* <View style={styles.section}>
                                
                                <Caption style={styles.caption}>{user.email}</Caption>
                            </View> */}
                <View style={styles.section}>
                  {/* <Paragraph style={[styles.paragraph, styles.caption]}>Tel:</Paragraph> */}
                  <Caption style={styles.caption}>{user.job}</Caption>
                </View>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                pressColor="#A6CE39"
                label="Home"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Find Colleague"
                pressColor="#A6CE39"
                onPress={() => {
                  props.navigation.navigate("SearchColleague");
                }}
              />
              {userLogged.access === "admin" ? (
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon name="folder-plus" color={color} size={size} />
                  )}
                  pressColor="#A6CE39"
                  label="Create Branch"
                  onPress={() => {
                    props.navigation.navigate("createBranch");
                  }}
                />
              ) : null}
              {userLogged.access === "admin" ? (
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon name="home-group" color={color} size={size} />
                  )}
                  pressColor="#A6CE39"
                  label="Branch List"
                  onPress={() => {
                    props.navigation.navigate("BranchesList");
                  }}
                />
              ) : null}
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="map-marker-multiple" color={color} size={size} />
                )}
                pressColor="#A6CE39"
                label="Branchs Map"
                onPress={() => {
                  props.navigation.navigate("BranchsMap");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="account-multiple-plus-outline"
                    color={color}
                    size={size}
                  />
                )}
                pressColor="#A6CE39"
                label="Create User"
                onPress={() => {
                  props.navigation.navigate("Create User");
                }}
              />
            </Drawer.Section>
          </View>
        ) : null}
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          pressColor="#A6CE39"
          onPress={() => handleLogout()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
