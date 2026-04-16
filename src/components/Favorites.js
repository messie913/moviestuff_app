import React, { use, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const Favorites = () => {
  let favMovies = JSON.parse(localStorage.getItem("favorites")) || 0;
  const [favMoviesData, setFavMoviesData] = useState([]);
  const [moviesGenre, setMoviesGenre] = useState([]);
  const getGenres = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=fr-FR&api_key=160728a9067dcfbc4ccebf7b2cc782cf",
      )
      .then((res) => setMoviesGenre(res.data.genres));
  };
  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const requests = favMovies.map((id) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=160728a9067dcfbc4ccebf7b2cc782cf&language=fr-FR`,
          ),
        );

        const responses = await Promise.all(requests);
        const movies = responses.map((res) => res.data);

        setFavMoviesData(movies);
      } catch (err) {
        console.error("Erreur lors du chargement des favoris", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="fav_container">
      <Header />
      <h1>Mes coups de coeur</h1>
      <div className="moviesContainer">
        <div className="moviesDataContainer">
          {favMovies !== 0 ? (
            favMoviesData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} genres={moviesGenre} />
            ))
          ) : (
            <div className="emptyBox">
              <h2>
                Aucun film favori trouvé. Veuillez ajouter un film en favori.
              </h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
