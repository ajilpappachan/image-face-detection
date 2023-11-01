import { useEffect } from "react";
import { useSetUserContext, useUserContext } from "../contexts/UserContext";
import { logout } from "../firebase/auth";
import { Navigate } from "react-router-dom";

const Logout = () => {
	const user = useUserContext();
	const setUser = useSetUserContext();

	const handleLogout = async () => {
		await logout();
		setUser && setUser(undefined);
	};

	useEffect(() => {
		if (user) {
			handleLogout();
		}
	}, [user]);

	if (!user) return <Navigate to="/" replace={true} />;

	return <div>Logging Out</div>;
};

export default Logout;
