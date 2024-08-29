"use client";

import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const mediaQueryList = window.matchMedia(query);
			const documentChangeHandler = () => {
				setMatches(mediaQueryList.matches);
			};

			setMatches(mediaQueryList.matches);
			mediaQueryList.addEventListener("change", documentChangeHandler);

			return () => {
				mediaQueryList.removeEventListener(
					"change",
					documentChangeHandler
				);
			};
		}
	}, [query]);

	return matches;
};
