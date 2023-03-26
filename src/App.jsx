import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { MovieList } from "./pages";

const App = () => {
  return (
    <div className='dark:bg-slate-800'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<MovieList title='Home' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
