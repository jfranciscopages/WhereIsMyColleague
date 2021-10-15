import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import DrawerContainer from "./containers/DrawerContainer";
import Intro from "./screens/Intro";
import Login from "./screens/Login";
import Home from "./screens/Home/Home";
import editBranch from "./screens/Admin/editBranch";
import Map from "./components/Map/Map";
import UserDetails from "./screens/UserDetails";
import Branch from "./screens/Branch";
import { CreateFloor } from "./screens/CreateFloor";
import { EditFloor } from "./screens/EditFloor";
import { EditUser } from "./screens/Admin/EditUser";
import { WorkSpaces } from "./screens/WorkSpaces";
import WorkspaceIndividual from "./screens/WorkspaceIndividual";
import { createWorkspace } from "./screens/createWorkspace";

/* import { FloorDetails } from "./screens/FloorDetails"; */

const Stack = createNativeStackNavigator();

export default function Main() {
  const profile = useSelector((state) => state.profile);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        {profile.id ? (
          <>
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerShown: false, headerTitle: "Ellabro" }}
              name="Home"
              component={Home}
            />
            <Stack.Screen name="Branch" component={Branch} />
            <Stack.Screen name="Edit Branch" component={editBranch} />

            <Stack.Screen name="CreateFloor" component={CreateFloor} />
            <Stack.Screen name="Workspaces" component={WorkSpaces} />
            <Stack.Screen
              name="Personal workspace"
              component={WorkspaceIndividual}
            />
            <Stack.Screen name="Edit Floor" component={EditFloor} />
            <Stack.Screen name="Edit User" component={EditUser} />
            <Stack.Screen
              name="userinfo"
              component={UserDetails}
              options={{
                headerTitle: "",
              }}
            />

            <Stack.Screen name="map" component={Map} />
          </>
        ) : (
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
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
