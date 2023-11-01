import { User, getAuth } from "firebase/auth";

const useCurrentUser = (): User | null => {
	const auth = getAuth();
	const currentUser = auth.currentUser;
	return currentUser;
};

export { useCurrentUser };
