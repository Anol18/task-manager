import { useCallback } from "react";
import { Col, Row, Select, DatePicker } from "antd";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
import dayjs from "dayjs";

export default function Filter() {
	const [searchParams, setSearchParams] = useSearchParams();

	const updateSearchParams = useCallback(
		debounce((newParams) => {
			setSearchParams((prevParams) => {
				const cleanParams = Object.fromEntries(
					Object.entries({
						...Object.fromEntries(prevParams),
						...newParams,
					}).filter(([_, v]) => v)
				);
				return cleanParams;
			});
		}, 300), // Shortened debounce delay for responsiveness
		[]
	);

	const handleChange = (key) => (value) => {
		const paramValue = key === "dueDate" ? value?.format("YYYY-MM-DD") : value;
		updateSearchParams({ [key]: paramValue });
	};

	return (
		<Row gutter={[16, 16]}>
			<Col lg={{ span: 8 }} xs={{ span: 24 }}>
				<Select
					placeholder="Select Priority"
					value={searchParams.get("priority") || ""}
					onChange={handleChange("priority")}
					className="w-full"
					showSearch
					allowClear
				>
					<Select.Option value="High">High</Select.Option>
					<Select.Option value="Medium">Medium</Select.Option>
					<Select.Option value="Low">Low</Select.Option>
				</Select>
			</Col>

			<Col lg={{ span: 8 }} xs={{ span: 24 }}>
				<DatePicker
					placeholder="Select Due Date"
					value={
						searchParams.get("dueDate")
							? dayjs(searchParams.get("dueDate"))
							: null
					}
					onChange={handleChange("dueDate")}
					className="w-full"
				/>
			</Col>

			<Col lg={{ span: 8 }} xs={{ span: 24 }}>
				<Select
					showSearch
					allowClear
					placeholder="Select Status"
					value={searchParams.get("status") || ""}
					onChange={handleChange("status")}
					className="w-full"
				>
					<Select.Option value="Pending">Pending</Select.Option>
					<Select.Option value="In Progress">In Progress</Select.Option>
					<Select.Option value="Completed">Completed</Select.Option>
				</Select>
			</Col>
		</Row>
	);
}
