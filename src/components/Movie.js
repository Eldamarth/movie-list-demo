import React from "react";

const Movie = ({ movie: { title, watched }, toggleMovieWatched }) => {
	return (
		<div className="movie">
			<div className="movie-title">{title}</div>
			<button
				className="watchedButton"
				onClick={(e) => {
					e.preventDefault();
					toggleMovieWatched(title);
				}}
			>
				<div className="watchedBool">{watched ? `✔` : `❌`}</div>
			</button>
		</div>
	);
};
export default Movie;
