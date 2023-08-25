type SignInProps = {
	OnSignIn: () => void;
};

const SignIn = ({ OnSignIn }: SignInProps) => {
	return (
		<div>
			<button onClick={OnSignIn}>Sign In</button>
		</div>
	);
};

export default SignIn;
