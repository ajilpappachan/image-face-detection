import { ChangeEvent, FormEvent, useState } from "react";

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
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input type="email" onChange={handleEmailChange} />
			<label htmlFor="password">Password</label>
			<input type="password" onChange={handlePasswordChange} />
			<button type="submit">
				{formType === "signin" ? "Sign In" : "Register"}
			</button>
		</form>
	);
};

export default UserForm;
