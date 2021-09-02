import React from "react";
import { useGlobalContext } from "../context";

const MangaSearch = () => {
	let { mangaName, setMangaName, setSearchManga, searchManga } =
		useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		setMangaName(searchManga);
	};

	return (
		<section>
			<section className="text-gray-400 bg-gray-900 body-font ">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Manga Finder
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
							ipsa voluptate omnis molestias quasi dolorem voluptates atque
							debitis pariatur aliquid magni rem ea, mollitia excepturi, quae
							minima. Harum minus cumque officia nulla consequuntur, optio dolor
							quasi quia ea sapiente laboriosam vero, recusandae porro facilis
							deserunt ut. Magnam aliquid repellat totam!
						</p>
					</div>
					<div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
						<div className="relative sm:mb-0 flex-grow w-full">
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									name="name"
									value={mangaName}
									className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									onChange={(e) => setSearchManga(e.target.value)}
								/>
								<button
									type="submit"
									className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5"
								>
									search
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export { MangaSearch };
