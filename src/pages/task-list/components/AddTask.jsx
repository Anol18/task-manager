import { useState } from "react";
import { Button, Col, Form, Input, Modal, Row, DatePicker, Select } from "antd";
import useMessage from "../../../hooks/useMessage";
import { useCreateNewTaskMutation } from "../../../app/features/tasks/taskApiSlice";
import { Controller, useForm } from "react-hook-form";
const AddTask = () => {
	const { contextHolder, error, loading, messageApi, success } = useMessage();
	const [createNewTask] = useCreateNewTaskMutation();
	const { handleSubmit, reset, control } = useForm();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onsubmit = () => {
		try {
			loading("Please Wait");
			const res = createNewTask();
		} catch (error) {}
	};
	return (
		<>
			{contextHolder}
			<Button type="primary" onClick={showModal}>
				Add Task
			</Button>
			<Modal
				title="Add Task"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form>
					<Row gutter={[16, 16]}>
						<Col lg={{ span: 24 }} xs={{ span: 24 }}>
							<Controller
								control={control}
								name={"title"}
								rules={{
									required: {
										value: true,
										message: "Field is Required",
									},
								}}
								render={({
									field: { onChange, onBlur, value },
									fieldState: { error },
								}) => (
									<>
										<Input
											placeholder="Title"
											onChange={onChange}
											value={value}
											onBlur={onBlur}
										/>
										{error && (
											<span style={{ color: "red" }}>{error.message}</span>
										)}
									</>
								)}
							/>
						</Col>
						<Col lg={{ span: 8 }} xs={{ span: 24 }}>
							<Controller
								control={control}
								name={"dueDate"}
								rules={{
									required: {
										value: true,
										message: "Field is Required",
									},
								}}
								render={({
									field: { onChange, onBlur, value },
									fieldState: { error },
								}) => (
									<>
										<DatePicker
											onChange={onChange}
											value={value}
											onBlur={onBlur}
											placeholder="Pick due date"
										/>
										{error && (
											<span style={{ color: "red" }}>{error.message}</span>
										)}
									</>
								)}
							/>
						</Col>
						<Col lg={{ span: 8 }} xs={{ span: 24 }}>
							<Controller
								control={control}
								name={"priority"}
								rules={{
									required: {
										value: true,
										message: "Field is Required",
									},
								}}
								render={({
									field: { onChange, onBlur, value },
									fieldState: { error },
								}) => (
									<>
										<Select
											placeholder="Select Priority"
											className="w-full"
											showSearch
											allowClear
											onChange={onChange}
											value={value}
											onBlur={onBlur}
										>
											<Select.Option value="High">High</Select.Option>
											<Select.Option value="Medium">Medium</Select.Option>
											<Select.Option value="Low">Low</Select.Option>
										</Select>
										{error && (
											<span style={{ color: "red" }}>{error.message}</span>
										)}
									</>
								)}
							/>
						</Col>
						<Col lg={{ span: 8 }} xs={{ span: 24 }}>
							<Controller
								control={control}
								name={"status"}
								rules={{
									required: {
										value: true,
										message: "Field is Required",
									},
								}}
								render={({
									field: { onChange, onBlur, value },
									fieldState: { error },
								}) => (
									<>
										<Select
											showSearch
											allowClear
											placeholder="Select Status"
											className="w-full"
											onChange={onChange}
											value={value}
											onBlur={onBlur}
										>
											<Select.Option value="Pending">Pending</Select.Option>
											<Select.Option value="In Progress">
												In Progress
											</Select.Option>
											<Select.Option value="Completed">Completed</Select.Option>
										</Select>
										{error && (
											<span style={{ color: "red" }}>{error.message}</span>
										)}
									</>
								)}
							/>
						</Col>
						<Col lg={{ span: 24 }} xs={{ span: 24 }}>
							<Input.TextArea placeholder="Description" />
						</Col>
					</Row>
				</Form>
			</Modal>
		</>
	);
};
export default AddTask;
