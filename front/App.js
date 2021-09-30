import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Intro from "./screens/Intro";
import Login from "./screens/Login";
import Main from "./containers/Main";

import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="main"
              component={Main}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
