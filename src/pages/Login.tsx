import { Navigate } from "react-router-dom";
import { useSetUserContext } from "../contexts/UserContext";
import { useEffect } from "react";
import { useCurrentUser } from "../firebase/hooks";

const Login = () => {
	const user = useCurrentUser();
	const setUser = useSetUserContext();

	useEffect(() => {
		if (user) {
			setUser && setUser(user);
		}
	}, [user]);

	if (user) return <Navigate to="/" replace={true} />;

	return <div className="">Logging In</div>;
};

export default Login;
