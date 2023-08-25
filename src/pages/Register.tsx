type RegisterProps = {
	OnRegister: () => void;
};

const Register = ({ OnRegister }: RegisterProps) => {
	return (
		<div>
			<button onClick={OnRegister}>Register</button>
		</div>
	);
};

export default Register;
