import { User } from "firebase/auth";
import { Page } from "../App";
import { logout } from "../firebase/auth";
import styles from "./Navbar.module.css";

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
		<nav className={styles.navbar}>
			<p className={`${styles.title} text-bold`}>Image Face Detection</p>
			{currentPage === "signin" && (
				<p
					className={`${styles.auth} text-regular`}
					onClick={() => handlePageChange("register")}
				>
					Register
				</p>
			)}
			{currentPage === "register" && (
				<p
					className={`${styles.auth} text-regular`}
					onClick={() => handlePageChange("signin")}
				>
					Sign In
				</p>
			)}
		</nav>
	);
	return <div>{user ? signedInNav : loggedOutNav}</div>;
};

export default Navbar;
