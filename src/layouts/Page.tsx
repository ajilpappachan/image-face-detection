import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContextProvider } from "../contexts/UserContext";
import ParticlesBackground from "../components/ParticlesBackground";

const Page = () => {
	return (
		<UserContextProvider>
			<ParticlesBackground />
			<Navbar />
			<main>
				<Outlet />
			</main>
		</UserContextProvider>
	);
};

export default Page;
