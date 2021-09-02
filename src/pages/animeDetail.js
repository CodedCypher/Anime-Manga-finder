import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Loading } from "../components/loading";
import { Characters } from "../components/characters";
const AnimeDetail = () => {
	const { id } = useParams();
	const [details, setDetails] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsCopied(false), 5000);
	}, [isCopied]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchAnime = async () => {
			setLoading(true);
			try {
				const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
				const data = await response.json();
				const AnimeDetails = data;
				if (AnimeDetails) {
					setDetails(AnimeDetails);
				} else if (!AnimeDetails) {
					setDetails(null);
				}
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchAnime();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	if (loading) {
		return <Loading />;
	}
	if (details) {
		const {
			synopsis,
			title,
			genres,
			episodes,
			image_url,
			rating,
			trailer_url,
		} = details;

		const genreList = [];
		for (let i = 0; i < genres.length - 1; i++) {
			genreList.push(genres[i].name);
		}
		const genre = genreList.join(", ");
		return (
			<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto h-full">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								{/* Author: */}
							</h2>
							<h1 className="text-white text-3xl title-font font-medium mb-4">
								{title}
							</h1>
							<p className="leading-relaxed mb-4">{synopsis}</p>
							<div className="flex border-t border-gray-800 py-2">
								<span className="text-gray-500">Rating:</span>
								<span className="ml-auto text-white">{rating}</span>
							</div>
							<div className="flex border-t border-gray-800 py-2">
								<span className="text-gray-500">Episodes:</span>
								<span className="ml-auto text-white">{episodes}</span>
							</div>
							<div className="flex border-t border-b mb-6 border-gray-800 py-2">
								<span className="text-gray-500">Genre: </span>
								<span className="ml-auto text-white">{genre}</span>
							</div>
							<div className="flex">
								{trailer_url && (
									<button
										className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
										onClick={() => {
											if (!isCopied) {
												setIsCopied(true);
												navigator.clipboard.writeText(trailer_url);
											}
										}}
									>
										{isCopied
											? "Successfuly copied trailer link"
											: "Watch Trailer"}
									</button>
								)}
							</div>
						</div>
						<img
							alt="ecommerce"
							className="lg:w-1/2 w-full lg:h-auto h-screen object-cover object-center rounded"
							src={image_url}
						/>
					</div>
				</div>
				<Characters id={id} type={"anime"} parameter={"characters_staff"} />
			</section>
		);
	} else {
		return <Loading />;
	}
};
export { AnimeDetail };
