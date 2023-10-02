import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

export type UserFormProps = {
	onSubmit: (email: string, password: string) => void;
	formType: "signin" | "register";
};

const UserForm = ({ onSubmit, formType }: UserFormProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(email, password);
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setPassword(event.target.value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="email">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter Email Address"
					required
					onChange={handleEmailChange}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter Password"
					required
					onChange={handlePasswordChange}
				/>
			</Form.Group>
			<Button className="w-100" type="submit">
				{formType === "signin" ? "Sign In" : "Register"}
			</Button>
		</Form>
	);
};

export default UserForm;
