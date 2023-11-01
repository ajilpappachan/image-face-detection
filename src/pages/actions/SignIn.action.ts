import { ActionFunctionArgs } from "react-router-dom";
import { signIn } from "../../firebase/auth";
import { User } from "firebase/auth";

interface SignInActionData {
	user?: User;
	error?: string;
}

const signinAction = async ({
	request,
}: ActionFunctionArgs): Promise<SignInActionData> => {
	const formData = await request.formData();
	try {
		const email = formData.get("email")?.toString() || "";
		const password = formData.get("password")?.toString() || "";
		const user = await signIn(email, password);

		return { user };
	} catch (error) {
		return {
			error: error instanceof Error ? error.message : (error as string),
		};
	}
};

export type { SignInActionData };
export default signinAction;
