import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import UpcomingCard from "./UpcomingCard";

const NewMoviesMarquee = () => {
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const getUpcoming = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=160728a9067dcfbc4ccebf7b2cc782cf&language=fr-FR&page=1",
      )
      //   .then((res) => console.log(res.data));
      .then((res) => setMoviesUpcoming(res.data.results));
  };
  useEffect(() => {
    getUpcoming();
  }, []);
  return (
    <div className="MarqueeSection">
      <h2 className="title">Les films mieux notées</h2>
      <Marquee play pauseOnClick>
        {moviesUpcoming.map((movie) => (
          <UpcomingCard movie={movie} key={movie.id} />
        ))}
      </Marquee>
    </div>
  );
};

export default NewMoviesMarquee;
