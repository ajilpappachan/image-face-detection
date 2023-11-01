import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Page from "./layouts/Page";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import registerAction from "./pages/actions/Register.action";
import SignIn from "./pages/SignIn";
import signinAction from "./pages/actions/SignIn.action";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import FaceDetection from "./pages/FaceDetection";
import faceDetectionAction from "./pages/actions/FaceDetection.action";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Page />}>
			<Route index element={<Home />}></Route>
			<Route
				path="register"
				element={<Register />}
				action={registerAction}
			></Route>
			<Route path="signin" element={<SignIn />} action={signinAction}></Route>
			<Route path="login" element={<Login />}></Route>
			<Route path="logout" element={<Logout />}></Route>
			<Route
				path="facedetection"
				element={<FaceDetection />}
				action={faceDetectionAction}
			></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
