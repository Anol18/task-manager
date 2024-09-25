import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row, DatePicker, Select } from "antd";
import useMessage from "../../../hooks/useMessage";
import {
  useCreateNewTaskMutation,
  useUpdateTaskMutation,
  useViewTaskByIdQuery,
} from "../../../app/features/tasks/taskApiSlice";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
const AddTask = () => {
  const { contextHolder, error, loading, messageApi, success } = useMessage();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: singleData, isSuccess } = useViewTaskByIdQuery(
    searchParams.get("id"),
    {
      skip: !searchParams.get("id"),
    }
  );
  const [createNewTask] = useCreateNewTaskMutation();
  const { handleSubmit, reset, control } = useForm();

  const [updateTask] = useUpdateTaskMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if (!searchParams.get("id")) {
      reset({
        title: "",
        dueDate: null,
        priority: "",
        status: "",
        description: "",
      }); // Clear the form when no ID is provided
    }
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setSearchParams();
    reset();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setSearchParams();
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (e) => {
    try {
      loading("Please Wait");
      const dueDate = new Date(e.dueDate);

      const year = dueDate.getFullYear();
      const month = String(dueDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
      const day = String(dueDate.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      let res;
      if (searchParams.get("id")) {
        res = await updateTask({
          id: searchParams.get("id"),
          data: { ...e, dueDate: formattedDate },
        });
      } else {
        res = await createNewTask({
          ...e,
          dueDate: formattedDate,
        });
      }

      if (res) {
        messageApi.destroy();
        success("Success");
        reset();
        setSearchParams();
        handleOk();
      }
    } catch (err) {
      messageApi.destroy();
      error("Error occured");
    }
  };
  useEffect(() => {
    if (searchParams.get("id")) setIsModalOpen(true);
    else setIsModalOpen(false);

    reset({
      title: singleData?.title,
      dueDate: dayjs(singleData?.dueDate),
      priority: singleData?.priority,
      status: singleData?.status,
      description: singleData?.description,
    });
  }, [searchParams.get("id"), isSuccess]);

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
        footer={null}
      >
        <Form onFinish={handleSubmit(onSubmit)}>
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
                      className="w-full"
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
              <Controller
                control={control}
                name={"description"}
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
                    <Input.TextArea
                      placeholder="Description"
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
          </Row>
          <Row justify={"end"} className="mt-5" gutter={16}>
            <Col>
              <Button htmlType="reset" type="default" onClick={() => reset()}>
                Reset
              </Button>
            </Col>
            <Col>
              {" "}
              <Button htmlType="submit" type="primary">
                {searchParams.get("id") ? "Update" : "Add"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default AddTask;
