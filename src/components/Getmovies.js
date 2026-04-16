import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Getmovies = ({ searchValue }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesGenre, setMoviesGenre] = useState([]);
  const firstLetterCapital = (string) => {
    let firstLetter = string[0].toUpperCase();
    return firstLetter + string.slice(1, string.length);
  };
  const getMoviesData = () => {
    axios
      .get(
        searchValue
          ? `https://api.themoviedb.org/3/search/movie?api_key=160728a9067dcfbc4ccebf7b2cc782cf&query=${firstLetterCapital(searchValue)}&language=fr-FR`
          : `https://api.themoviedb.org/3/movie/popular?api_key=160728a9067dcfbc4ccebf7b2cc782cf&language=fr-FR`,
      )
      .then((res) => setMoviesData(res.data.results))
      .catch((err) => console.log(err));
  };

  const getGenres = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=fr-FR&api_key=160728a9067dcfbc4ccebf7b2cc782cf",
      )
      .then((res) => setMoviesGenre(res.data.genres));
  };
  useEffect(() => getMoviesData(), [searchValue]);
  useEffect(() => {
    getGenres();
  }, []);
  return (
    <div className="moviesContainer">
      <div className="moviesDataContainer">
        {moviesData
          //   .filter((movie) => movie.title.includes(searchValue))
          .sort((a, b) => b.vote_average - a.vote_average)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} genres={moviesGenre} />
          ))}
      </div>
    </div>
  );
};

export default Getmovies;
