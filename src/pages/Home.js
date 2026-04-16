import React, { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import Popularswiper from "../components/Popularswiper";
import { NavLink } from "react-router-dom";
import About from "../components/About";
import NewMoviesMarquee from "../components/NewMoviesMarquee";
import ChoicesBD from "../components/ChoicesBD";
import Footer from "../components/Footer";

const Home = () => {
  const [popMovies, setPopMovies] = React.useState([]);
  const getPopMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=160728a9067dcfbc4ccebf7b2cc782cf&language=fr-FR",
      )
      .then((res) => setPopMovies(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPopMovies();
  }, []);
  return (
    // Style with home.scss
    <div className="mainHome">
      <Header />
      <div className="bannerHome"></div>

      <About />
      <NewMoviesMarquee />
      {/* <About /> */}
      <ChoicesBD />

      <h1 className="title">
        Films populaires
        <div className="seeAll">
          <NavLink to="/movies">Voir tous les films</NavLink>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </h1>
      <Popularswiper popMovies={popMovies} />
      <Footer />
    </div>
  );
};

export default Home;
