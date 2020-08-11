import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h5>{year}</h5>
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <li className="movie__genre" key={index}>
                {genre}
              </li>
            );
          })}

          <p>{summary.slice(0, 180)}...</p>
        </ul>
      </div>
    </div>
  );
}
//
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
