import React, { useState, useEffect } from "react";

import Header from './Header';
import Logo from './Logo';
import SearchPane from './SearchPane';
import MovieList from './MovieList';
import Footer from './Footer';

async function getData(url) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *client
  });
  //  console.log( await response.json());

  return await response.json();
}

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData("http://localhost:4000/movies").then((jsonResponse) =>
      setMovies(jsonResponse.data)
    );
  }, []);

  return (
    <div className="content">
      <Header />
      <hr></hr>
      <SearchPane />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
