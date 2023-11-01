import { User } from "firebase/auth";
import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

const UserContext = createContext<User | undefined>(undefined);
const SetUserContext = createContext<
	Dispatch<SetStateAction<User | undefined>> | undefined
>(undefined);

const useUserContext = () => {
	return useContext(UserContext);
};

const useSetUserContext = () => {
	return useContext(SetUserContext);
};

const UserContextProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User>();

	return (
		<UserContext.Provider value={user}>
			<SetUserContext.Provider value={setUser}>
				{children}
			</SetUserContext.Provider>
		</UserContext.Provider>
	);
};

export { useUserContext, useSetUserContext, UserContextProvider };
