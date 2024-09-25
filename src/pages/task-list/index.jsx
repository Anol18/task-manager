import { useState } from "react";
import { useGetTasksQuery } from "../../app/features/tasks/taskApiSlice";
import Table from "../../components/antd/table";
import { Skeleton, Tag } from "antd";
import Filter from "./components/Filter";
import { useSearchParams } from "react-router-dom";
import AddTask from "./components/AddTask";
const priority = {
	Low: "geekblue",
	Medium: "orange",
	High: "red",
};
const status = {
	Pending: "warning",
	"In Progress": "processing",
	Completed: "success",
};
export default function TaskList() {
	const [searchParams] = useSearchParams();
	const [pagination, setPagination] = useState({
		pageNumber: 1,
		pageSize: 10,
	});
	const { data, isFetching } = useGetTasksQuery({
		priority: searchParams.get("priority") || "",
		status: searchParams.get("status") || "",
		dueDate: searchParams.get("dueDate") || "",
		...pagination,
	});
	const column = [
		{
			title: "Index",
			render: (_, record, index) =>
				(pagination.pageNumber - 1) * pagination.pageSize + index + 1,
		},
		{
			title: "Title",
			dataIndex: "title",
		},
		{
			title: "Description",
			dataIndex: "description",
		},
		{
			title: "Priority",
			dataIndex: "priority",
			render: (text) => <Tag color={priority[text]}>{text}</Tag>,
		},
		{
			title: "Due Date",
			dataIndex: "dueDate",
		},
		{
			title: "Status",
			dataIndex: "status",
			render: (text) => <Tag color={status[text]}>{text}</Tag>,
		},
	];

	const handlePagination = (current, pageSize) => {
		setPagination({
			pageNumber: current,
			pageSize: pageSize,
		});
	};
	return (
		<>
			<div className="space-y-5">
				<div>
					<Filter />
				</div>
				<div className="flex justify-end">
					<AddTask />
				</div>
				<Skeleton
					active
					paragraph={{
						rows: 15,
					}}
					loading={isFetching}
				/>
				{!isFetching && (
					<Table
						columns={column}
						id={"id"}
						data={data?.tasks}
						totalCount={data?.totalTasks}
						pagination={{
							...pagination,
							onChange: handlePagination,
						}}
					/>
				)}
			</div>
		</>
	);
}
