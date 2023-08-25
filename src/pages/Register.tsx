import RegisterForm from "../components/RegisterForm";

export type RegisterProps = {
	onRegister: (user: string) => void;
};

const Register = ({ onRegister }: RegisterProps) => {
	return (
		<div>
			<h2>Register</h2>
			<RegisterForm onSubmit={(email) => onRegister(email)} />
		</div>
	);
};

export default Register;
