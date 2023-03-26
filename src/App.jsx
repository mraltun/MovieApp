import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { MovieList } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<MovieList title='Home' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
