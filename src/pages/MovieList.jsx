import React from "react";
import useFetch from "../hooks/useFetch";
import { Card } from "../components";

const MovieList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data: movies } = useFetch(
    `${apiUrl}/movie/now_playing?api_key=${apiKey}`
  );

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
