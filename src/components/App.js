import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import "../styles/App.css";

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			masterList: {},
			displayedList: [],
			currentWatchedView: "all",
		};
		this.addMovieHandler = this.addMovieHandler.bind(this);
		this.searchHandler = this.searchHandler.bind(this);
		this.watchedViewCycler = this.watchedViewCycler.bind(this);
		this.resetDisplayedList = this.resetDisplayedList.bind(this);
		this.setWatchedView = this.setWatchedView.bind(this);
		this.toggleMovieWatched = this.toggleMovieWatched.bind(this);
	}
	get masterList() {
		return Object.values(this.state.masterList);
	}
	componentDidMount() {
		this.resetDisplayedList();
	}
	addMovieHandler(movieTitle) {
		let newMovie = { title: movieTitle, watched: false };
		let { masterList } = this.state;
		masterList[movieTitle] = newMovie;
		this.setState({ masterList: masterList }, this.resetDisplayedList);
	}
	searchHandler() {
		// Search the entire string to find a match (i.e. for subtitles etc)
	}
	toggleMovieWatched(movieTitle) {
		let { masterList } = this.state;

		masterList[movieTitle].watched = !masterList[movieTitle].watched;
		this.setState({ masterList: masterList });
	}
	setWatchedView(term) {
		this.setState({ currentWatchedView: term });
	}
	watchedViewCycler() {
		// cycle between showing all, watched, and unwatched
		let { currentWatchedView } = this.state;
		let correctTerm =
			currentWatchedView === "all"
				? "watched"
				: currentWatchedView === "watched"
				? "unwatched"
				: "all";
		this.setWatchedView(correctTerm);
	}
	resetDisplayedList() {
		this.setState({ displayedList: this.masterList });
	}

	render() {
		let { currentWatchedView, displayedList } = this.state;

		let watchedMovies = this.state.displayedList.filter(
			(movie) => movie.watched
		);
		let unwatchedMovies = this.state.displayedList.filter(
			(movie) => !movie.watched
		);
		let correctMovieList =
			currentWatchedView === "watched"
				? watchedMovies
				: currentWatchedView === "unwatched"
				? unwatchedMovies
				: displayedList;
		return (
			<div className="App">
				<SearchBar
					searchHandler={this.searchHandler}
					addMovieHandler={this.addMovieHandler}
				/>
				<MovieList
					list={correctMovieList}
					toggleMovieWatched={this.toggleMovieWatched}
				/>
			</div>
		);
	}
}

export default App;
