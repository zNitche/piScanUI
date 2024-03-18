import { addSearchParamsToUrl } from "@/utils/fetch";
import { useCallback, useEffect, useState } from "react";

interface useQueryResults<T> {
	isLoading: boolean;
	isError: boolean;
	refetch: () => Promise<void>;
	data: T | undefined;
}

export default function useQuery<T>(
	url: string,
	fetchOnMount: boolean = true,
	searchParams?: Record<string, string | number | null | undefined>
): useQueryResults<T> {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<T | undefined>(undefined);

	const fetchData = useCallback(async () => {
		if (isLoading) {
			return;
		}

		setIsLoading(true);
		setIsError(false);

		try {
			const urlObj = addSearchParamsToUrl(url, searchParams);

			const res = await fetch(urlObj.toString(), {
				method: "GET",
				headers: [],
			});

			const resData = await res.json();
			setData(resData);
		} catch (error) {
			console.error(`error while fetching ${url}: ${error}`);
			setIsError(true);
		}

		setIsLoading(false);
	}, [url, isLoading]);

	useEffect(() => {
		if (fetchOnMount) {
			void fetchData();
		}
	}, []);

	return { isLoading, isError, refetch: fetchData, data };
}
