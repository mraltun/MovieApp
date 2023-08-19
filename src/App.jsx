import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";
import { MovieDetail, MovieList, PageNotFound, Search } from "./pages";

const App = () => {
  return (
    <div className="dark:bg-darkbg">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path=""
            element={
              <MovieList apiPath="/movie/now_playing?api_key=" title="Home" />
            }
          />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route
            path="/movies/popular"
            element={
              <MovieList apiPath="/movie/popular?api_key=" title="Popular" />
            }
          />
          <Route
            path="/movies/top"
            element={
              <MovieList
                apiPath="/movie/top_rated?api_key="
                title="Top Rated"
              />
            }
          />
          <Route
            path="/movies/upcoming"
            element={
              <MovieList apiPath="/movie/upcoming?api_key=" title="Upcoming" />
            }
          />
          <Route
            path="search"
            element={<Search apiPath="/search/movie?api_key=" />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
