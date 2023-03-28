import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { MovieList, Search } from "./pages";

const App = () => {
  return (
    <div className='dark:bg-slate-800'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path=''
            element={
              <MovieList apiPath='/movie/now_playing?api_key=' title='Home' />
            }
          />
          <Route
            path='search'
            element={<Search apiPath='/search/movie?api_key=' title='Search' />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
