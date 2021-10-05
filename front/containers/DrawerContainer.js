import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home/Home";
import SearchColleague from "../screens/SearchColleague";
import DrawerContent from "../screens/DrawerContent";
import BranchesList from "../screens/BranchesList";
import Branch from "../screens/Branch";
import newBranch from "../screens/Admin/newBranch";
import BranchsMap from "../components/Map/BranchsMap";
import { CreateFloor } from "../screens/CreateFloor";

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="SearchColleague" component={SearchColleague} />
      <Drawer.Screen name="BranchesList" component={BranchesList} />
      <Drawer.Screen name="Branch" component={Branch} />
      <Drawer.Screen name="createBranch" component={newBranch} />
      <Drawer.Screen name="BranchsMap" component={BranchsMap} />
    </Drawer.Navigator>
  );
}
