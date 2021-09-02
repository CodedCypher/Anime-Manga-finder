import React, { createContext, useState, useContext, useEffect } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);

	const [animes, setAnimes] = useState([]);
	const [searchAnime, setSearchAnime] = useState("");
	const [animeName, setAnimeName] = useState("");
	const [animeCurrentPage, setAnimeCurrentPage] = useState(1);
	const [animePerPage, setAnimePerPage] = useState(10);

	const [mangas, setMangas] = useState([]);
	const [searchManga, setSearchManga] = useState("");
	const [mangaName, setMangaName] = useState("");
	const [mangaCurrentPage, setMangaCurrentPage] = useState(1);
	const [mangaPerPage, setMangaPerPage] = useState(10);

	useEffect(() => {
		const fetchManga = async () => {
			setLoading(true);
			try {
				if (mangaName) {
					const response = await fetch(
						`https://api.jikan.moe/v3/search/manga?q=${mangaName}&page=1`
					);
					const { results } = await response.json();
					if (results) {
						setMangas(results);
					} else {
						setMangas([]);
					}
				} else {
					const response = await fetch(
						`https://api.jikan.moe/v3/search/manga?q=&order_by=members&sort=desc&page=1`
					);
					const { results } = await response.json();
					if (results) {
						setMangas(results);
					} else {
						setMangas([]);
					}
				}
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};

		const fetchAnime = async () => {
			setLoading(true);
			try {
				if (animeName) {
					const response = await fetch(
						`https://api.jikan.moe/v3/search/anime?q=${animeName}&page=1`
					);
					const { results } = await response.json();
					const animeList = results;
					if (animeList) {
						setAnimes(animeList);
					} else {
						setAnimes([]);
					}
				} else {
					const response = await fetch(
						`https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1`
					);
					const { results } = await response.json();
					const animeList = results;
					if (animeList) {
						setAnimes(animeList);
					} else {
						setAnimes([]);
					}
				}
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchAnime();
		fetchManga();
	}, [animeName, mangaName]);

	return (
		<appContext.Provider
			value={{
				loading,
				setLoading,

				animes,
				setAnimeName,
				searchAnime,
				setSearchAnime,
				animeCurrentPage,
				setAnimeCurrentPage,
				animePerPage,
				setAnimePerPage,

				mangas,
				setMangaName,
				searchManga,
				setSearchManga,
				mangaCurrentPage,
				setMangaCurrentPage,
				mangaPerPage,
				setMangaPerPage,
			}}
		>
			{children}
		</appContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(appContext);
};

export { AppProvider, useGlobalContext };
