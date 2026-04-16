import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const Favorites = () => {
  // const favMovies = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favMovies, setFavMovies] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  console.log(favMovies);

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
        const requests =
          favMovies.length > 0
            ? favMovies.map((id) =>
                axios.get(
                  `https://api.themoviedb.org/3/movie/${id}?api_key=160728a9067dcfbc4ccebf7b2cc782cf&language=fr-FR`,
                ),
              )
            : [];

        const responses = await Promise.all(requests);
        const movies = responses.map((res) => res.data);

        setFavMoviesData(movies);
      } catch (err) {
        console.error("Erreur lors du chargement des favoris", err);
      }
    };

    fetchMovies();
  }, [favMovies]);

  return (
    <div className="fav_container">
      <Header />
      <h1>Mes coups de coeur</h1>
      <div className="moviesContainer">
        <div className="moviesDataContainer">
          {favMovies.length !== 0 ? (
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
