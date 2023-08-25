export type RegisterProps = {
	onRegister: (user: string) => void;
};

const Register = ({ onRegister }: RegisterProps) => {
	return (
		<div>
			<button onClick={() => onRegister("user@email.com")}>Register</button>
		</div>
	);
};

export default Register;
