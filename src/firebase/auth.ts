import {
	User,
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import app from "./appConfig";

const auth = getAuth(app);

const signIn = async (email: string, password: string): Promise<User> => {
	const credentials = await signInWithEmailAndPassword(auth, email, password);
	return credentials.user;
};

const register = async (email: string, password: string): Promise<User> => {
	const credentails = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	return credentails.user;
};

const logout = async () => {
	await signOut(auth);
};

export { signIn, register, logout };
