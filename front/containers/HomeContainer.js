import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchColleague from "../screens/SearchColleague";
import UserDetails from "../screens/UserDetails";
import Map from "../components/Map/Map";

const Stack = createNativeStackNavigator();

export default function HomeContainer() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="searchColleague"
          component={SearchColleague}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userinfo"
          component={UserDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="map"
          component={Map}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
