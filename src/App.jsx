import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { MovieList, PageNotFound, Search } from "./pages";

const App = () => {
  return (
    <div className="dark:bg-darkbg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path=""
            element={
              <MovieList apiPath="/movie/now_playing?api_key=" title="Home" />
            }
          />
          <Route
            path="search"
            element={<Search apiPath="/search/movie?api_key=" title="Search" />}
          />
          <Route
            path="*"
            element={<PageNotFound apiPath="" title="Page Not Found" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
