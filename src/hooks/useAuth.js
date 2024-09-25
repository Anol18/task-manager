import Cookies from "js-cookie";
export default function useAuth() {
	const token = Cookies.get(import.meta.env.VITE_COOKIE_LABEL);
	try {
		if (!token) {
			console.error("Invalid role or permissions");
			logout(); // Implement a logout function to clear token and state
			return { isAuthenticated: false };
		}

		return { isAuthenticated: true };
	} catch (error) {
		console.error("Error decoding token:", error);
		logout();
	}
}

export function logout() {
	Cookies.remove(import.meta.env.VITE_COOKIE_LABEL, { path: "/" });
}
