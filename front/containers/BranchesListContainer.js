import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BranchesList from "../screens/BranchesList";
import newBranch from "../screens/Admin/newBranch";
import editBranch from "../screens/Admin/editBranch";
import UserDetails from "../screens/UserDetails";
import Branch from "../screens/Branch";

const Stack = createNativeStackNavigator();

export default function HomeContainer() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Branches List"
          component={BranchesList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Branch"
          component={Branch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userinfo"
          component={UserDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="newBranch"
          component={newBranch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editBranch"
          component={editBranch}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
