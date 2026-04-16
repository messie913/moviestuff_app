import React, { useState } from "react";
export const dateFormater = (date) => {
  let [yy, mm, dd] = date.split("-");
  return [dd, mm, yy].join("/");
};

const MovieCard = ({ movie, genres }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [newItems, setNewItems] = useState([]);

  const addFav = (id) => {
    console.log(newItems);

    setNewItems((prev) => {
      const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];

      if (!storedFavs.includes(id)) {
        const updated = [...storedFavs, id];
        localStorage.setItem("favorites", JSON.stringify(updated));
        return updated;
      }
      window.location.reload();
      return prev;
    });
  };
  const removeFav = (id) => {
    const currentFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavs = currentFavs.filter((favId) => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setNewItems(updatedFavs);
    window.location.reload();
  };

  return (
    <div
      className="card"
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      <div className="card-head">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`Film de ${movie.poster_path}`}
          />
        ) : (
          <img src="./Logos/notitlecinema.jpg" alt="Logo defaut cinema" />
        )}
        {/* <h3 className="titlePhones">{movie.title}</h3> */}
      </div>
      <div className={`card-body ${isHovered ? "cardShow" : "hide"}`}>
        <h3>{movie.title}</h3>
        <p>Sortie le : {dateFormater(movie.release_date)}</p>
        {/* <p>Popularité : {movie.popularity}</p> */}
        <strong>
          {movie.vote_average.toFixed(2)} / 10{" "}
          <i className="fa-solid fa-star"></i>
        </strong>
        <div className="genre">
          {movie.genre_ids
            ? movie.genre_ids.map((genreId, index) => {
                // Find genre object in array genres
                const genreObj = genres.find(
                  (genreMovie) => genreMovie.id === genreId,
                );

                //return span with genre name
                return (
                  <span className="genreName" key={index}>
                    {genreObj ? genreObj.name : "Genre inconnu"}
                  </span>
                );
              })
            : movie.genres.map((genreId, index) => {
                return (
                  <span className="genreName" key={index}>
                    {genreId ? genreId.name : "Genre inconnu"}
                  </span>
                );
              })}
        </div>
        <h4>Synopsis :</h4>
        <p className="overview">{movie.overview}</p>
        <div className="card-footer">
          {movie.genres ? (
            <button id={movie.id} onClick={() => removeFav(movie.id)}>
              Retirer aux coups de coeur
            </button>
          ) : (
            <button id={movie.id} onClick={() => addFav(movie.id)}>
              Ajouter aux coups de coeur
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
