import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./global.css";
import MainPage from "./Page/MainPage";
function App() {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <MainPage />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;
