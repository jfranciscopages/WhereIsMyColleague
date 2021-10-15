import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut, setProfile } from "../store/profileReducer";
import { View, StyleSheet } from "react-native";
import { useTheme, Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { userById } from "../store/usersReducer";
import * as ImagePicker from "expo-image-picker";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, useToast } from "native-base";

export default function DrawerContent(props) {
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();
  const paperTheme = useTheme();
  const user = useSelector((state) => state.profile);
  const [imageAttached, setImageAttached] = useState(null);
  const userLogged = useSelector(state => state.profile)


  const handleLogout = () => {
    dispatch(setProfile({}));
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Box bg="green.500" px="2" py="4" rounded="sm" mt={70}>
            Good bye!
          </Box>
        )
      }
    })
  };

  const handleUser = async (id) => {
    await dispatch(userById(id));
    navigation.navigate("userinfo");
  };

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        alert("Sorry, we need camera roll permissions to make this work!");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageAttached(result.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <TouchableOpacity onPress={pickImage}>
                <Avatar.Image
                  source={{
                    uri: imageAttached
                      ? imageAttached
                      : "https://i.pravatar.cc/150?img=62",
                  }}
                  size={50}
                />
              </TouchableOpacity>
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
            {userLogged.access === 'admin' ?
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
              : null}

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
            {userLogged.access === 'admin' ?
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
              : null}
            {/*  <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
          </Drawer.Section>
          {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          pressColor="#A6CE39"
          onPress={() => handleLogout()}
        /* onPress={() => {}} */
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
