import { useEffect, useState } from "react";
import { Layout, theme } from "antd";
import { Button } from "antd";
// import SidebarData from "./sidebarData";
import LabelData from "./LabelData";
import Icon from "../../components/Icon";
const { Header, Sider, Content, Footer } = Layout;
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import useAuth, { logout } from "../../hooks/useAuth";
import useAreyouSure from "../../hooks/useConfirm";
// import useAreYouSure from "../../../hooks/useAreYouSure";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [mColWidth, setMColWidth] = useState(80);
	const { isAuthenticated } = useAuth();

	const {
		token: { colorBgContainer, borderRadiusLG, heightFull },
	} = theme.useToken();
	const { contextHolder, confirmed } = useAreyouSure(
		"Logout",
		"Your session will be end"
	);
	const navigate = useNavigate();
	const handleLogout = async () => {
		const confirm = await confirmed();
		if (confirm) {
			logout();
			navigate("/");
		}
	};
	// const handleClickOutside = useCallback((event) => {
	//   console.log(event.target.id);
	//   if (event.target.id === "outside" && mColWidth === 0) {
	//     setCollapsed(true);
	//   }
	// }, []);
	const { pathname } = useLocation();
	useEffect(() => {
		if (mColWidth === 0) {
			setCollapsed(true);
		}
	}, [pathname]);
	const handleSidebarCollasp = () => {
		if (mColWidth === 0) setCollapsed(true);
	};

	return (
		<>
			{contextHolder}
			{isAuthenticated ? (
				<Layout style={{ height: heightFull }} hasSider={true}>
					<Sider
						breakpoint="md"
						trigger={null}
						collapsible={true}
						width={250}
						collapsed={collapsed}
						collapsedWidth={mColWidth}
						onBreakpoint={(broken) => {
							if (broken) {
								setCollapsed(true);
								setMColWidth(0);
							} else {
								setCollapsed(false);
								setMColWidth(80);
							}
						}}
						style={{
							backgroundColor: colorBgContainer,
							height: "100svh",
							position: mColWidth === 0 && "fixed",
							left: 0,
							zIndex: 10,
						}}
						className="overflow-y-auto mobile-view"
					>
						{!collapsed && (
							<p className="mt-4 text-md ml-7 font-semibold">General</p>
						)}

						<LabelData />
						<div className=" flex justify-center pt-5 border-t pb-3">
							<Button
								style={{}}
								startIcon={
									<Icon
										icon="material-symbols:logout-sharp"
										className="text-lg"
									/>
								}
								onClick={handleLogout}
							>
								<span
									className={`${collapsed ? "hidden" : "block "} text-nowrap`}
								>
									Logout
								</span>
							</Button>
						</div>
					</Sider>
					<Layout>
						<Header
							style={{
								padding: 0,
								background: colorBgContainer,
							}}
							className="flex items-center justify-between max-md:justify-start"
						>
							{/* toggle button */}
							<Button
								variant="text"
								onClick={() => setCollapsed((prev) => !prev)}
								style={{
									fontSize: "22px",
									width: 64,
									height: 64,
									position: mColWidth === 0 && "absolute",
									right: mColWidth === 0 && 0,

									transition: "left 0.3s",
								}}
								className="toggle-button"
							>
								{collapsed ? (
									<Icon icon="ant-design:menu-unfold-outlined" />
								) : (
									<Icon icon="ant-design:menu-fold-outlined" />
								)}
							</Button>
							{/* logo */}
							<div className="flex justify-center w-full">
								{/* <img src={smartFarmer} width={60} className="" /> */}
							</div>

							{/* regi button */}
						</Header>
						<Content
							onClick={handleSidebarCollasp}
							style={{
								margin: "24px 16px",
								padding: 24,
								minHeight: 280,
								background: colorBgContainer,
								borderRadius: borderRadiusLG,
								display: "block",
								overflowY: "scroll",
							}}
						>
							<Outlet />
						</Content>

						<Footer
							style={{
								textAlign: "center",
								padding: 0,
							}}
							className="text-primary select-none"
						>
							Task Manager ©{new Date().getFullYear()} Developed by{" "}
							<a
								href="/"
								target="_black"
								className="hover:underline hover:text-primary"
								rel="noopener noreferrer"
							>
								Business Automation{" "}
							</a>
						</Footer>
					</Layout>
				</Layout>
			) : (
				<Navigate to="/" />
			)}
		</>
	);
};
export default Sidebar;
