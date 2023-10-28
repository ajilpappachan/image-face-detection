import { User } from "firebase/auth";
import { Page } from "../App";
import { logout } from "../firebase/auth";

export type NavbarProps = {
	user: User | undefined;
	currentPage: Page;
	onLogout: () => void;
	handlePageChange: (page: Page) => void;
};

const Navbar = ({
	user,
	currentPage,
	onLogout,
	handlePageChange,
}: NavbarProps) => {
	const handleLogout = async () => {
		await logout();
		onLogout();
	};
	const signedInNav = (
		<div className="">
			<span>{user?.email}</span>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
	const loggedOutNav = (
		<nav>
			<p>Image Face Detection</p>
			{currentPage === "signin" && (
				<p onClick={() => handlePageChange("register")}>Register</p>
			)}
			{currentPage === "register" && (
				<p onClick={() => handlePageChange("signin")}>Sign In</p>
			)}
		</nav>
	);
	return <div>{user ? signedInNav : loggedOutNav}</div>;
};

export default Navbar;
