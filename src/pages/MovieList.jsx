import React, { useEffect, useState } from "react";
import { Card } from "../components";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `${apiUrl}/movie/now_playing?api_key=${apiKey}`
      );
      console.log(response);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
