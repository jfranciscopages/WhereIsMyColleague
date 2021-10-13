import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import DrawerContainer from "./containers/DrawerContainer";
import Intro from "./screens/Intro";
import Login from "./screens/Login";
import Home from "./screens/Home/Home";
import newBranch from "./screens/Admin/newBranch";
import editBranch from "./screens/Admin/editBranch";
import Map from "./components/Map/Map";
import UserDetails from "./screens/UserDetails";
import Branch from "./screens/Branch";
import { CreateFloor } from "./screens/CreateFloor";
import { EditFloor } from "./screens/EditFloor";
import { FloorDetails } from "./screens/FloorDetails";

const Stack = createNativeStackNavigator();

export default function Main() {
  const profile = useSelector((state) => state.profile);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        {/* {profile.id ? ( */}
        <>
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Branch" options={{ headerShown: false }} component={Branch} />
          <Stack.Screen name="editBranch" options={{ headerShown: false }} component={editBranch} />
          {/*  <Stack.Screen name="newBranch" component={newBranch} /> */}
          <Stack.Screen name="CreateFloor" options={{ headerShown: false }} component={CreateFloor} />
          <Stack.Screen name="floorDetails" options={{ headerShown: false }} component={FloorDetails} />
          <Stack.Screen name='EditFloor' options={{ headerShown: false }} component={EditFloor} />

          <Stack.Screen name="map" options={{ headerShown: false }} component={Map} />
        </>
        {/* ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Intro"
              component={Intro}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            /> */}
        {/* </> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
