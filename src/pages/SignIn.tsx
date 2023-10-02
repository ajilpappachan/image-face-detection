import { User } from "firebase/auth";
import UserForm from "../components/UserForm";
import { signIn } from "../firebase/auth";
import { Container } from "react-bootstrap";

export type SignInProps = {
	onSignIn: (user: User) => void;
};

const SignIn = ({ onSignIn }: SignInProps) => {
	const handleSignIn = async (email: string, password: string) => {
		const user = await signIn(email, password);
		onSignIn(user);
	};
	return (
		<Container className="mt-3 d-flex flex-column justify-content-center align-items-center">
			<h2>Sign In</h2>
			<UserForm onSubmit={handleSignIn} formType={"signin"} />
		</Container>
	);
};

export default SignIn;
