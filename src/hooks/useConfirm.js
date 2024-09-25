import { Modal } from "antd";

const useAreyouSure = (title = "", description = "") => {
	const config = {
		title,
		content: description,
		okText: "Yes",
		cancelText: "No",
	};
	const [modal, contextHolder] = Modal.useModal();
	const confirmed = async () => {
		return await modal.confirm(config);
	};
	return {
		contextHolder,
		confirmed,
	};
};

export default useAreyouSure;
