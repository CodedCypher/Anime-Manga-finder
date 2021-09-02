import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useGlobalContext } from "../context";
function Pagination({
	mangaPerPage,
	totalMangas,
	paginate,
	currentLastMangaIndex,
	currentFirstMangaIndex,
}) {
	const { mangaCurrentPage, setMangaCurrentPage } = useGlobalContext();

	const handleMangaChange = (type) => {
		if (type === "next") {
			if (mangaCurrentPage > 0 && mangaCurrentPage < pageNumbers.length) {
				setMangaCurrentPage(mangaCurrentPage + 1);
			}
		}
		if (type === "prev") {
			if (mangaCurrentPage > 1) {
				setMangaCurrentPage(mangaCurrentPage - 1);
			}
		}
	};

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalMangas / mangaPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="text-gray-400 bg-gray-900 body-font px-4 py-3 flex items-center justify-between border-t border-indigo-500 sm:px-6">
			<div className="flex-1 flex justify-between sm:hidden">
				<button
					onClick={() => handleMangaChange("prev")}
					className=" relative inline-flex items-center px-4 py-2 border bg-gray-800 border-indigo-500 text-sm font-medium rounded-md text-white bg-white hover:bg-gray-900"
				>
					Previous
				</button>
				<button
					onClick={() => handleMangaChange("next")}
					className="ml-3 relative inline-flex items-center px-4 py-2 border bg-gray-800 border-indigo-500 text-sm font-medium rounded-md text-white bg-white hover:bg-gray-900"
				>
					Next
				</button>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-white">
						Showing{" "}
						<span className="font-medium">{currentFirstMangaIndex + 1}</span> to{" "}
						<span className="font-medium">{currentLastMangaIndex}</span> of{" "}
						<span className="font-medium">{totalMangas}</span> results
					</p>
				</div>
				<div>
					<nav
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						<button className="relative inline-flex items-center px-2 py-2 rounded-l-md border bg-gray-800 border-indigo-500 text-sm font-medium text-white hover:bg-gray-900">
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon
								className="h-5 w-5"
								aria-hidden="true"
								onClick={() => handleMangaChange("prev")}
							/>
						</button>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						{pageNumbers.map((number) => {
							return (
								<button
									onClick={() => paginate(number)}
									key={number}
									aria-current="page"
									className={`${
										mangaCurrentPage === number
											? `bg-indigo-500`
											: "bg-gray-800 "
									}z-10  border-indigo-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
								>
									{number}
								</button>
							);
						})}
						<button className="relative inline-flex items-center px-2 py-2 rounded-r-md border bg-gray-800 border-indigo-500 text-sm font-medium text-white hover:bg-gray-900">
							<span className="sr-only">Next</span>
							<ChevronRightIcon
								className="h-5 w-5"
								aria-hidden="true"
								onClick={() => handleMangaChange("next")}
							/>
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}

export { Pagination };
