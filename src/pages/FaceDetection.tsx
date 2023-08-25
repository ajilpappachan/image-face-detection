import { logout } from "../firebase/auth";

export type FaceDetectionProps = {
	onLogout: () => void;
};

const FaceDetection = ({ onLogout }: FaceDetectionProps) => {
	const handleLogout = async () => {
		await logout();
		onLogout();
	};
	return (
		<div>
			<p>FaceDetection</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default FaceDetection;
