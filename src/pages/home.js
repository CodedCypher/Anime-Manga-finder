import React from "react";
import anime from "./anime.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="text-gray-400 bg-gray-900 body-font background-anime relative">
			<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-screen background-content">
				<img
					className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
					alt="hero"
					src={anime}
				/>
				<div className="text-center lg:w-2/3 w-full">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Manga Finder
					</h1>
					<p className="leading-relaxed mb-8">
						This website is built using Jikan API, allows you to search through
						tens of thousands of mangas. Find the manga that you're looking for.
					</p>
					<div className="flex justify-center">
						{/* <Link
							to="/anime"
							className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
						>
							Animes
						</Link> */}
						<Link
							to="/manga"
							className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
						>
							Mangas
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Home };
