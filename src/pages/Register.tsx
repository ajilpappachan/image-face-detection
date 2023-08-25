import { User } from "firebase/auth";
import UserForm from "../components/UserForm";
import { register } from "../firebase/auth";

export type RegisterProps = {
	onRegister: (user: User) => void;
};

const Register = ({ onRegister }: RegisterProps) => {
	const handleRegister = async (email: string, password: string) => {
		const user = await register(email, password);
		onRegister(user);
	};
	return (
		<div>
			<h2>Register</h2>
			<UserForm onSubmit={handleRegister} formType="register" />
		</div>
	);
};

export default Register;
