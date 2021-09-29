import axios from "axios";
import "./components/list-item.js";
import "./components/actors-item.js";
import "./components/movies-item.js";

const main = () => {
  // Get Data from API using Axios
  const getActors = () => {
    const urlActors = "https://api.themoviedb.org/3/person/popular";
    axios
      .get(urlActors, {
        params: {
          api_key: "02b26526598c878b02d249743e3f3373",
          language: "en-US",
          page: "1",
        },
      })
      .then((response) => {
        renderActors(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  const getPopular = () => {
    const urlMovies = "https://api.themoviedb.org/3/movie/popular";
    axios
      .get(urlMovies, {
        params: {
          api_key: "02b26526598c878b02d249743e3f3373",
          language: "en-US",
          page: "1",
        },
      })
      .then((response) => {
        renderPopular(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  const getTopRated = () => {
    const urlMovies = "https://api.themoviedb.org/3/movie/top_rated";
    axios
      .get(urlMovies, {
        params: {
          api_key: "02b26526598c878b02d249743e3f3373",
          language: "en-US",
          page: "1",
        },
      })
      .then((response) => {
        renderTopRated(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  const getNowPlaying = () => {
    const urlMovies = "https://api.themoviedb.org/3/movie/now_playing";
    axios
      .get(urlMovies, {
        params: {
          api_key: "02b26526598c878b02d249743e3f3373",
          language: "en-US",
          page: "1",
        },
      })
      .then((response) => {
        renderNowPlaying(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  // Render view content
  const renderActors = (actors) => {
    const listActors = document.querySelector("#actors");
    listActors.innerHTML = "";
    actors.forEach((actor) => {
      const itemElement = document.createElement("actors-item");
      itemElement.actor = actor;
      listActors.appendChild(itemElement);
    });
  };

  const renderPopular = (movies) => {
    const listMovies = document.querySelector("#popular");
    listMovies.innerHTML = "";
    movies.forEach((movie) => {
      const itemElement = document.createElement("movies-item");
      itemElement.movie = movie;
      listMovies.appendChild(itemElement);
    });
  };

  const renderTopRated = (movies) => {
    const listMovies = document.querySelector("#top_rated");
    listMovies.innerHTML = "";
    movies.forEach((movie) => {
      const itemElement = document.createElement("movies-item");
      itemElement.movie = movie;
      listMovies.appendChild(itemElement);
    });
  };

  const renderNowPlaying = (movies) => {
    const listMovies = document.querySelector("#now_playing");
    listMovies.innerHTML = "";
    movies.forEach((movie) => {
      const itemElement = document.createElement("movies-item");
      itemElement.movie = movie;
      listMovies.appendChild(itemElement);
    });
  };

  getNowPlaying();
  getPopular();
  getTopRated();
  getActors();
};

export default main;
