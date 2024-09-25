import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signin() {
	const navigate = useNavigate();
	const { handleSubmit, reset, control } = useForm();
	const onSubmit = (e) => {
		if (
			import.meta.env.VITE_USERNAME === e.username &&
			import.meta.env.VITE_PASSWORD === e.password
		) {
			Cookies.set(
				import.meta.env.VITE_COOKIE_LABEL,
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
			);
			navigate("/app");
		}
	};
	useEffect(() => {
		reset({
			username: "admin",
			password: "123",
		});
	}, []);
	return (
		<div className="">
			<Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
				<Form.Item label="Username">
					<Controller
						control={control}
						name={"username"}
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
									size="large"
									placeholder="Username"
									onChange={onChange}
									value={value}
									onBlur={onBlur}
								/>
								{error && <span style={{ color: "red" }}>{error.message}</span>}
							</>
						)}
					/>
				</Form.Item>
				<Form.Item label="Password">
					<Controller
						control={control}
						name={"password"}
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
								<Input.Password
									size="large"
									placeholder="password"
									onChange={onChange}
									value={value}
									onBlur={onBlur}
								/>
								{error && <span style={{ color: "red" }}>{error.message}</span>}
							</>
						)}
					/>
				</Form.Item>
				<div className="flex justify-center">
					<Form.Item>
						<Button color="primary" htmlType="submit">
							Signin
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
}
