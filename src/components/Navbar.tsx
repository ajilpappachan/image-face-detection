import { User } from "firebase/auth";
import { Page } from "../App";
import { logout } from "../firebase/auth";
import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";

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
		<BsNavbar.Text>
			<Nav className="me-auto">
				<BsNavbar.Text>{user?.email}</BsNavbar.Text>
				<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
			</Nav>
		</BsNavbar.Text>
	);
	const loggedOutNav = (
		<BsNavbar.Text>
			<Nav className="me-auto">
				{currentPage === "signin" && (
					<Nav.Link onClick={() => handlePageChange("register")}>
						Register
					</Nav.Link>
				)}
				{currentPage === "register" && (
					<Nav.Link onClick={() => handlePageChange("signin")}>
						Sign In
					</Nav.Link>
				)}
			</Nav>
		</BsNavbar.Text>
	);
	return (
		<BsNavbar className="bg-background">
			<Container>
				<BsNavbar.Brand>Image Face Detection</BsNavbar.Brand>
				<BsNavbar.Toggle />
				<BsNavbar.Collapse className="justify-content-end">
					{user ? signedInNav : loggedOutNav}
				</BsNavbar.Collapse>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
