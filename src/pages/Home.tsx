import { useUserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
	const user = useUserContext();

	return <Navigate to={user ? "/facedetection" : "/signin"} replace={true} />;
};

export default Home;
