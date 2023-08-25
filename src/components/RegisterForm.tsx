import { ChangeEvent, FormEvent, useState } from "react";

export type RegisterFormProps = {
	onSubmit: (email: string, password: string) => void;
};

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
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
			<button type="submit">Register</button>
		</form>
	);
};

export default RegisterForm;
