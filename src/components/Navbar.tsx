import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Navbar = () => {
	const user = useUserContext();

	return (
		<header>
			<h1>Image Face Detection</h1>
			<nav>
				{user && (
					<span>
						Hello, {user.email} <Link to={"/logout"}>Logout</Link>
					</span>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
