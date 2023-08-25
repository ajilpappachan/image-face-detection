import { useState } from "react";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import FaceDetection from "./pages/FaceDetection";

type Page = "signin" | "register" | "facedetection";

const App = () => {
	const [currentPage, setCurrentPage] = useState<Page>("signin");

	const changePage = (newPage: Page) => {
		setCurrentPage(newPage);
	};

	return (
		<div>
			{currentPage === "signin" && <SignIn />}
			{currentPage === "register" && <Register />}
			{currentPage === "facedetection" && <FaceDetection />}
		</div>
	);
};

export default App;
