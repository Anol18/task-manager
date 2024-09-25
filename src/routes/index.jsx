import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoute";
import { privateRoutes } from "./privateRoute";
import Spinner from "../components/Spinner";
const Sidebar = lazy(() => import("../layout/private-layout"));
import useAuth from "../hooks/useAuth";
// eslint-disable-next-line react-refresh/only-export-components
const PublicIndex = lazy(() => import("../layout/public-layout"));
export default function Index() {
	const { isAuthenticated } = useAuth();

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="*" element={<PublicIndex />}>
					{publicRoutes.map(({ path, Component }) => {
						return (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<Spinner />}>
										<Component />
									</Suspense>
								}
							/>
						);
					})}
				</Route>
				<Route
					path="app/*"
					element={
						<Suspense fallback={<Spinner />}>
							<Sidebar />
						</Suspense>
					}
				>
					{privateRoutes.map(({ path, Component }) => {
						//  hasAccess(user.roles, accessRoles) ?
						if (isAuthenticated)
							return (
								<Route
									key={path}
									path={path}
									element={
										<Suspense fallback={<Spinner />}>
											<Component />
										</Suspense>
									}
								/>
							);
					})}
				</Route>
			</Routes>
		</Suspense>
	);
}
