import React from "react";

import Logo from './Logo';
import Button from './Button';

var Header = (props) => {
  return (
    <header className="movie-header">
      <Logo />
      <Button label="+ADD MOVIE" class="add-button" />
      <p className="header-title">FIND YOUR MOVIE</p>
      <input />
      <Button label="SEARCH" action={searchMovie} class="red-button" />
    </header>
  );
};

function searchMovie(e) {
  console.log("searching...");
}

export default Header;
