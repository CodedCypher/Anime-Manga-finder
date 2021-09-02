import React from "react";
import { useGlobalContext } from "../context";
import { Anime } from "../components/singleAnime";
import { Loading } from "../components/loading";
import { Pagination } from "../components/animePagination";

const AnimeList = () => {
	let {
		animes,
		loading,
		animePerPage,
		mangas,
		animeCurrentPage,
		setAnimeCurrentPage,
	} = useGlobalContext();
	const indexOfLastAnime = animeCurrentPage * animePerPage;
	const indexOfFirstAnime = indexOfLastAnime - animePerPage;
	const currentAnimes = animes.slice(indexOfFirstAnime, indexOfLastAnime);
	const paginate = (pageNumber) => setAnimeCurrentPage(pageNumber);

	if (loading) {
		return <Loading />;
	}
	if (animes.length < 1) {
		return (
			<div className="flex flex-col text-center w-full mb-12 text-gray-400 bg-gray-900 body-font relative h-screen">
				<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white items-center">
					Sorry We can't find the anime you're looking for
				</h1>
			</div>
		);
	} else {
		return (
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container px-5 py-5 mx-auto">
					<div className="flex flex-wrap -m-4">
						{currentAnimes.map((anime) => {
							return <Anime key={anime.mal_id} {...anime} />;
						})}
					</div>
				</div>
				<Pagination
					animePerPage={animePerPage}
					totalAnimes={mangas.length}
					paginate={paginate}
					currentFirstAnimeIndex={indexOfFirstAnime}
					currentLastAnimeIndex={indexOfLastAnime}
				/>
			</section>
		);
	}
};

export { AnimeList };
