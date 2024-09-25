import { useState } from "react";
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
} from "../../app/features/tasks/taskApiSlice";
import Table from "../../components/antd/table";
import { Skeleton, Tag } from "antd";
import Filter from "./components/Filter";
import { useSearchParams } from "react-router-dom";
import AddTask from "./components/AddTask";
import Icon from "../../components/Icon";
import useMessage from "../../hooks/useMessage";
import useConfirm from "../../hooks/useConfirm";
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
  const [deleteTask] = useDeleteTaskMutation();

  const { contextHolder, error, loading, messageApi, success } = useMessage();
  const { contextHolder: isSureContext, confirmed } = useConfirm(
    "Delete",
    "Press YES to delete"
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    PageSize: 10,
  });
  const { data, isSuccess, isLoading } = useGetTasksQuery({
    priority: searchParams.get("priority") || "",
    status: searchParams.get("status") || "",
    dueDate: searchParams.get("dueDate") || "",
    ...pagination,
  });
  async function handleDelete(id) {
    try {
      const isOk = await confirmed();
      if (isOk) {
        loading();
        const res = await deleteTask(id);
        if (res) {
          messageApi.destroy();
          success("Deleted");
        }
      }
    } catch (err) {
      messageApi.destroy();
      error("Error");
    }
  }
  function handleEdit(id) {
    setSearchParams({
      id: id,
    });
  }
  const handleEvents = (id, type) => {
    switch (type) {
      case "edit":
        handleEdit(id);
        break;
      case "delete":
        handleDelete(id);
        break;
    }
  };
  const handleOnClick = (e) => {
    const targetId = e.target.closest("span[data-id]");
    const targetType = e.target.closest("span[data-type]");
    if (targetId && targetType) {
      const id = targetId.getAttribute("data-id");
      const actionType = targetType.getAttribute("data-type");
      handleEvents(id, actionType);
    }
  };
  const column = [
    {
      title: "Index",
      render: (_, record, index) =>
        (pagination.pageNumber - 1) * pagination.PageSize + index + 1,
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
    {
      title: "Action",

      render: (_, record) => (
        <>
          <div className="flex gap-5">
            <span data-id={record.id} data-type={"edit"}>
              <Icon
                icon={"uil:edit"}
                className="text-yellow-700 cursor-pointer size-4"
              />
            </span>

            <span data-id={record.id} data-type={"delete"}>
              <Icon
                icon={"material-symbols:delete-sharp"}
                className="text-red-700 cursor-pointer size-4"
              />
            </span>
          </div>
        </>
      ),
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
      {contextHolder}
      {isSureContext}
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
          loading={isLoading}
        />
        {isSuccess && (
          <div onClick={handleOnClick}>
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
          </div>
        )}
      </div>
    </>
  );
}
