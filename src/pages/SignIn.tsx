export type SignInProps = {
	onSignIn: (user: string) => void;
};

const SignIn = ({ onSignIn }: SignInProps) => {
	return (
		<div>
			<button onClick={() => onSignIn("user@email.com")}>Sign In</button>
		</div>
	);
};

export default SignIn;
