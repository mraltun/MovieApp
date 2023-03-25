import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
