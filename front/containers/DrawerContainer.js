import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";
import Map from "../components/Map/Map";
import SearchColleague from "../screens/SearchColleague";
import DrawerContent from "../screens/DrawerContent";
import BranchesList from "../screens/BranchesList";
import editBranch from "../screens/Admin/editBranch";
import Branch from "../screens/Branch";
import newBranch from "../screens/Admin/newBranch";

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="SearchColleague" component={SearchColleague} />
      <Drawer.Screen name="BranchesList" component={BranchesList} />
      <Drawer.Screen name="Branch" component={Branch} />
      <Drawer.Screen name="editBranch" component={editBranch} />
      <Drawer.Screen name="newBranch" component={newBranch} />
      <Drawer.Screen name="userinfo" component={UserDetails} />
      <Drawer.Screen name="map" component={Map} />
    </Drawer.Navigator>
  );
}
