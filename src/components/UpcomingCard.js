import React from "react";
import { dateFormater } from "./MovieCard";

const UpcomingCard = ({ movie }) => {
  return (
    <div className="upcomingCard">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        title={movie.title}
      />
      <h4>
        Sortie le : {dateFormater(movie.release_date)}
        {" - "}
        {movie.vote_average.toFixed(2)}{" "}
        <i className="fa-solid fa-star" style={{ color: "gold" }}></i> sur
        10{" "}
      </h4>
    </div>
  );
};

export default UpcomingCard;
