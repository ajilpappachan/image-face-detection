import { User } from "firebase/auth";
import UserForm from "../components/UserForm";
import { signIn } from "../firebase/auth";

export type SignInProps = {
	onSignIn: (user: User) => void;
};

const SignIn = ({ onSignIn }: SignInProps) => {
	const handleSignIn = async (email: string, password: string) => {
		const user = await signIn(email, password);
		onSignIn(user);
	};
	return (
		<div>
			<h2>Sign In</h2>
			<UserForm onSubmit={handleSignIn} formType={"signin"} />
		</div>
	);
};

export default SignIn;
