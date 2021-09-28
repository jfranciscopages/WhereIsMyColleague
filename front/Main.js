import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Intro from "./screens/Intro";
import Map from "./components/Map/Map";
import UserDetails from "./screens/UserDetails";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="map" component={Map} />
        <Stack.Screen name="userinfo" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
