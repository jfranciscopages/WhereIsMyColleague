import React from "react";

import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./Main";
import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
