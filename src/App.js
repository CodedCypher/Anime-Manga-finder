import React from "react";
import { Home } from "./pages/home";
import { AnimeList } from "./pages/animeList";
import { AnimeSearch } from "./components/animeSearch";
import { AnimeDetail } from "./pages/animeDetail";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { MangaDetail } from "./pages/mangaDetail";
import { MangaList } from "./pages/mangaList";
import { MangaSearch } from "./components/mangaSearch";
import { Footer } from "./components/footer";
function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/anime/:id" children={<AnimeDetail />}></Route>
				<Route path="/anime">
					<AnimeSearch />
					<AnimeList />
				</Route>
				<Route path="/manga/:id" children={<MangaDetail />}></Route>
				<Route path="/manga">
					<MangaSearch />
					<MangaList />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
