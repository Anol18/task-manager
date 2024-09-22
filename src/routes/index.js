import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoute";
import { privateRoutes } from "./privateRoute";
import Spinner from "../components/Spinner";
const Sidebar = lazy(() => import("../layouts/app/sidebar"));
import useAuth from "../hooks/useAuth";
// eslint-disable-next-line react-refresh/only-export-components
const WebsiteLayout = lazy(() => import("../layouts/website"));
export default function Index() {
	// const hasAccess = (userRoles, accessRoles) => {
	//   return userRoles.some(role => accessRoles.includes(role));
	// };
	const { user } = useAuth();

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="*" element={<WebsiteLayout />}>
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
					{privateRoutes.map(({ path, Component, accessList }) => {
						//  hasAccess(user.roles, accessRoles) ?
						if (accessList.includes(user?.permission.module))
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
