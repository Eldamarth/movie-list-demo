import React from "react";
const SearchBar = ({ searchHandler, addMovieHandler }) => {
	let getValue = () => document.querySelector(`input`).value;
	let resetValue = () => (document.querySelector(`input`).value = "");
	return (
		<form className="search-bar">
			<input className="search-bar-input-field"></input>
			<button
				className="search-button"
				onClick={(e) => {
					e.preventDefault();
					searchHandler(getValue());
					resetValue();
				}}
			>
				Search Movies
			</button>
			<button
				className="add-button"
				onClick={(e) => {
					e.preventDefault();
					addMovieHandler(getValue());
					resetValue();
				}}
			>
				Add Title
			</button>
		</form>
	);
};
export default SearchBar;
