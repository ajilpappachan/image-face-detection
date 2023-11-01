import { Form, Link, Navigate, useActionData } from "react-router-dom";
import { SignInActionData } from "./actions/SignIn.action";

const SignIn = () => {
	const actionData = useActionData() as SignInActionData | undefined;

	if (actionData?.user) return <Navigate to="/login" replace={true} />;

	return (
		<>
			<div>
				<h2>Welcome Back!</h2>
				<Form method="post" action="/signin">
					<input
						name="email"
						type="email"
						placeholder="Email Address"
						required
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						required
					/>
					<button type="submit">Sign In</button>
				</Form>
				<p>
					New User?
					<Link to="/register">Register</Link>
				</p>
			</div>
			{actionData?.error && <div className="">{actionData.error}</div>}
		</>
	);
};

export default SignIn;
