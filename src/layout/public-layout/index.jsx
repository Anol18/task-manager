import { Outlet } from "react-router-dom";
export default function PublicIndex() {
	return (
		<>
			<div className="flex justify-center place-items-center h-screen">
				<Outlet />
			</div>
		</>
	);
}
