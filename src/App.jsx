import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </>
  );
}

export default App;
