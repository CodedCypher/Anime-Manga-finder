import React, { useEffect, useState } from "react";

export const Characters = ({ id, type, parameter }) => {
	const [characters, setCharacters] = useState([]);
	const [staffs, setStaffs] = useState([]);
	useEffect(() => {
		const fetchCharacters = async (id, type, parameter) => {
			try {
				const response = await fetch(
					`https://api.jikan.moe/v3/${type}/${id}/${parameter}`
				);
				const data = await response.json();
				if (data) {
					setStaffs(data.staff);
					setCharacters(data.characters);
				} else {
					setCharacters([]);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchCharacters(id, type, parameter);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-2 mx-auto">
				<div className="flex flex-col text-center w-full mb-5">
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Characters
					</h1>
				</div>
				<div className="flex flex-wrap -m-2">
					{characters.map((character) => {
						const { mal_id, image_url, name, role } = character;
						return (
							<div className="p-2 lg:w-1/4 md:w-1/3 w-full" key={mal_id}>
								<div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
									<img
										alt="team"
										className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
										src={image_url}
									/>
									<div className="flex-grow">
										<h2 className="text-white title-font font-medium">
											{name}
										</h2>
										<p className="text-gray-600">{role}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{type === "anime" && (
				<div className="container px-5 py-2 mx-auto">
					<div className="flex flex-col text-center w-full mb-5">
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
							Staffs
						</h1>
					</div>
					<div className="flex flex-wrap -m-2">
						{staffs.map((staff) => {
							const { mal_id, image_url, name, positions } = staff;
							const position = positions.join(", ");
							return (
								<div className="p-2 lg:w-1/4 md:w-1/3 w-full" key={mal_id}>
									<div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
										<img
											alt="team"
											className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
											src={image_url}
										/>
										<div className="flex-grow">
											<h2 className="text-white title-font font-medium">
												{name}
											</h2>
											<p className="text-gray-600">{position}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</section>
	);
};
