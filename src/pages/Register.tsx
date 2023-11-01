import { Form, Link, Navigate, useActionData } from "react-router-dom";
import { RegisterActionData } from "./actions/Register.action";

const Register = () => {
	const actionData = useActionData() as RegisterActionData | undefined;

	if (actionData?.user) return <Navigate to="/login" replace={true} />;

	return (
		<>
			<div>
				<h2>Welcome to Image Face Detection!</h2>
				<Form method="post" action="/register">
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
					<button type="submit">Register</button>
				</Form>
				<p>
					Already a user?
					<Link to="/signin">Sign In</Link>
				</p>
			</div>
			{actionData?.error && <div className="">{actionData.error}</div>}
		</>
	);
};

export default Register;
