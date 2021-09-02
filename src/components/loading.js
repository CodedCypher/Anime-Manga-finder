import React from "react";
import { ReactComponent as Load } from "./loading.svg";

const Loading = () => {
	return (
		<section className="bg-gray-900 h-screen flex content-center">
			<Load className="center" />
		</section>
	);
};
export { Loading };
