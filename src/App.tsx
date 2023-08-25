import { useState } from "react";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import FaceDetection from "./pages/FaceDetection";
import Navbar from "./components/Navbar";

export type Page = "signin" | "register" | "facedetection";

const App = () => {
	const [currentPage, setCurrentPage] = useState<Page>("signin");
	const [user, setUser] = useState<string>();

	const signInUser = (newUser: string) => {
		setUser(newUser);
		setCurrentPage("facedetection");
	};

	const logoutUser = () => {
		setUser(undefined);
		setCurrentPage("signin");
	};

	return (
		<div>
			<Navbar
				user={user}
				currentPage={currentPage}
				onLogout={logoutUser}
				handlePageChange={setCurrentPage}
			/>
			{currentPage === "signin" && <SignIn onSignIn={signInUser} />}
			{currentPage === "register" && <Register onRegister={signInUser} />}
			{currentPage === "facedetection" && (
				<FaceDetection onLogout={logoutUser} />
			)}
		</div>
	);
};

export default App;
