import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home/Home";
import SearchColleague from "../screens/SearchColleague";
import DrawerContent from "../screens/DrawerContent";
import BranchesList from "../screens/BranchesList";
import Branch from "../screens/Branch";
import newBranch from "../screens/Admin/newBranch";
import BranchsMap from "../components/Map/BranchsMap";

import { CreateUser } from "../screens/Admin/CreateUser";

import UserDetails from "../screens/UserDetails";

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="SearchColleague"
        component={SearchColleague}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="BranchesList"
        component={BranchesList}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="createBranch"
        component={newBranch}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Create User"
        component={CreateUser}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="BranchsMap"
        component={BranchsMap}
        options={{
          headerTitle: "Map",
        }}
      />
    </Drawer.Navigator>
  );
}
