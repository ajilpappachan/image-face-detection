import { User } from "firebase/auth";
import UserForm from "../components/UserForm";
import { register } from "../firebase/auth";
import { Container } from "react-bootstrap";

export type RegisterProps = {
	onRegister: (user: User) => void;
};

const Register = ({ onRegister }: RegisterProps) => {
	const handleRegister = async (email: string, password: string) => {
		const user = await register(email, password);
		onRegister(user);
	};
	return (
		<Container className="mt-3 d-flex flex-column justify-content-center align-items-center">
			<h2>Register</h2>
			<UserForm onSubmit={handleRegister} formType={"register"} />
		</Container>
	);
};

export default Register;
