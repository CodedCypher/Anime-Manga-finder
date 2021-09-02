import React from "react";
import { Link } from "react-router-dom";

const Anime = ({ image_url, title, synopsis, rated, mal_id }) => {
	return (
		<div className="lg:w-1/4 sm:w-1/2 p-4 ">
			<div className="flex relative">
				<img
					alt="gallery"
					className="absolute inset-0 w-full h-full object-cover object-center "
					src={image_url}
				/>
				<div className="px-8 py-28 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
					<h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
						rated: {rated}
					</h2>
					<h1 className="title-font text-lg font-medium text-white mb-3">
						{title}
					</h1>
					<p className="leading-relaxed">{synopsis}</p>
					<Link
						to={`anime/${mal_id}/`}
						className="text-indigo-500 inline-flex items-center pt-2"
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};
export { Anime };
