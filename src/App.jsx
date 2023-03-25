import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
