import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_BASE_URL,
	credentials: "same-origin",
	prepareHeaders: (headers) => {
		const token = Cookies.get(import.meta.env.VITE_COOKIE_LABEL);
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	keepUnusedDataFor: 600,
	// refetchOnMountOrArgChange:10,
	endpoints: (builder) => ({}), // eslint-disable-line
});
