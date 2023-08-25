import UserForm from "../components/UserForm";

export type SignInProps = {
	onSignIn: (user: string) => void;
};

const SignIn = ({ onSignIn }: SignInProps) => {
	return (
		<div>
			<h2>Sign In</h2>
			<UserForm onSubmit={onSignIn} formType={"signin"} />
		</div>
	);
};

export default SignIn;
