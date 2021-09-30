import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeContainer from "./HomeContainer";
import BranchesListContainer from "../containers/BranchesListContainer";

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeContainer} />
        <Drawer.Screen name="BranchesList" component={BranchesListContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
