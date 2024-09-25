import Icon from "../../components/Icon";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../routes/path";
import { useMemo } from "react";

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

export default function SidebarData() {
	const navigate = useNavigate();

	let sidebarData = [];

	sidebarData = [
		getItem(
			"Dashboard",
			PRIVATE_ROUTES.DASHBOARD,
			<Icon icon="ic:baseline-dashboard-customize" />
		),

		getItem(
			"Tasks",
			"tasks",
			<Icon icon="mdi:marketplace" />,

			[
				getItem(
					"Tasks List",
					PRIVATE_ROUTES.TASK_LIST,
					<Icon icon="material-symbols:order-approve" />
				),
				getItem(
					"Completed Tasks",
					PRIVATE_ROUTES.ECOMMERCE_ORDER_LIST,
					<Icon icon="material-symbols:order-approve" />
				),
			]
		),

		// getItem("লগ আউট", "14", <Iconify icon="material-symbols:logout" />),
	];

	const memoizedSidebarData = useMemo(() => sidebarData, []);
	return (
		<Menu
			theme="light"
			mode="inline"
			className="mt-2 space-y-3"
			defaultSelectedKeys={["1"]}
			items={memoizedSidebarData}
			onClick={({ key }) => {
				navigate(key);
			}}
		/>
	);
}
