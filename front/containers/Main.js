import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeContainer from "./HomeContainer";
import BranchesListContainer from "../containers/BranchesListContainer";
import DrawerContent from "../screens/DrawerContent"
import Home from "../screens/Home"

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer independent={true}>
     <Drawer.Navigator /* initialRouteName="Home" */ drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Usuarios" component={HomeContainer} />
        <Drawer.Screen name="BranchesList" component={BranchesListContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
