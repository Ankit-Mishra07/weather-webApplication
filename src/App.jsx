import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Navbar />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;
