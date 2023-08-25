import UserForm from "../components/UserForm";

export type RegisterProps = {
	onRegister: (user: string) => void;
};

const Register = ({ onRegister }: RegisterProps) => {
	return (
		<div>
			<h2>Register</h2>
			<UserForm onSubmit={onRegister} formType="register" />
		</div>
	);
};

export default Register;
