import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import BaseRoute from "./routes";
function App() {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		if (isAuthenticated) {
			if (pathname === "/") isAuthenticated && navigate("/app");
		}
	}, [isAuthenticated, navigate, pathname]);

	return (
		<>
			<BaseRoute />
		</>
	);
}

export default App;
