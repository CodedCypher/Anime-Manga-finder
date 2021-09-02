import React from "react";
import { useGlobalContext } from "../context";
import { Loading } from "../components/loading";
import { Manga } from "../components/singleManga";
import { Pagination } from "../components/mangaPagination";

const MangaList = () => {
	let { mangas, loading, mangaCurrentPage, setMangaCurrentPage, mangaPerPage } =
		useGlobalContext();

	const indexOfLastManga = mangaCurrentPage * mangaPerPage;
	const indexOfFirstManga = indexOfLastManga - mangaPerPage;
	const currentMangas = mangas.slice(indexOfFirstManga, indexOfLastManga);

	const paginate = (pageNumber) => setMangaCurrentPage(pageNumber);

	if (loading) {
		return <Loading />;
	}

	if (mangas.length < 1) {
		return (
			<div className="flex flex-col text-center w-full mb-12 text-gray-400 bg-gray-900 body-font relative h-screen">
				<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white items-center">
					Sorry We can't find the manga you're looking for
				</h1>
			</div>
		);
	} else {
		return (
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container px-5 py-5 mx-auto">
					<div className="flex flex-wrap -m-4">
						{currentMangas.map((manga) => {
							return <Manga key={manga.mal_id} {...manga} />;
						})}
					</div>
				</div>
				<Pagination
					mangaPerPage={mangaPerPage}
					totalMangas={mangas.length}
					paginate={paginate}
					currentFirstMangaIndex={indexOfFirstManga}
					currentLastMangaIndex={indexOfLastManga}
				/>
			</section>
		);
	}
};

export { MangaList };
