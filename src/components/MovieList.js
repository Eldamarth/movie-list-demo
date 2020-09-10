import React from "react";
import Movie from "./Movie";
const MovieList = ({ list, toggleMovieWatched }) => {
	return (
		<div className="movie-list">
			{list.map((movie) => (
				<Movie movie={movie} toggleMovieWatched={toggleMovieWatched} />
			))}
		</div>
	);
};
export default MovieList;
