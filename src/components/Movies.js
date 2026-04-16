import React, { useState } from "react";
import Header from "./Header";
import Getmovies from "./Getmovies";
import Footer from "./Footer";

const Movies = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Header />
      <div className="searchContainer">
        <div className="searchBox">
          <h2>Trouve ton prochain coup de coeur</h2>
          <form action="" className="searchFields">
            <input
              type="text"
              id="inputSearch"
              placeholder="Rechercher un titre de film, une émission de télé, ..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <input type="submit" value="Rechercher" />
          </form>
          <div className="sortBtn">
            <button className="top">Top &#10514;</button>
            <button className="flop">Flop &#10515;</button>
          </div>
        </div>
      </div>
      <Getmovies searchValue={searchValue} />
      <Footer />
    </div>
  );
};

export default Movies;
