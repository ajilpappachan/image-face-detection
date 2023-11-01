import { ActionFunctionArgs } from "react-router-dom";
import { register } from "../../firebase/auth";
import { User } from "firebase/auth";

interface RegisterActionData {
	user?: User;
	error?: string;
}

const registerAction = async ({
	request,
}: ActionFunctionArgs): Promise<RegisterActionData> => {
	const formData = await request.formData();
	try {
		const email = formData.get("email")?.toString() || "";
		const password = formData.get("password")?.toString() || "";
		const user = await register(email, password);

		return { user };
	} catch (error) {
		return {
			error: error instanceof Error ? error.message : (error as string),
		};
	}
};

export type { RegisterActionData };
export default registerAction;
