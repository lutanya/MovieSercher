import React from "react";

function Movie(props) {
  return (
    <div>
      <p>
        <img src={props.src} alt={props.title}></img>
      </p>
      <p>{props.title}</p>
    </div>
  );
}

export default Movie;
