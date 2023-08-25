import { Page } from "../App";

export type NavbarProps = {
	user: string | undefined;
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
	const signedInNav = (
		<div className="">
			<span>{user}</span>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
	const loggedOutNav = (
		<div className="">
			{currentPage === "signin" && (
				<button onClick={() => handlePageChange("register")}>Register</button>
			)}
			{currentPage === "register" && (
				<button onClick={() => handlePageChange("signin")}>Sign In</button>
			)}
		</div>
	);
	return <div>{user ? signedInNav : loggedOutNav}</div>;
};

export default Navbar;
