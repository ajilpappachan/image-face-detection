import { useState } from "react";
import UrlForm from "../components/UrlForm";
import { logout } from "../firebase/auth";
import getFaceDetectionData, {
	FaceDetectionData,
} from "../utils/getFaceDetectionData";

export type FaceDetectionProps = {
	onLogout: () => void;
};

const FaceDetection = ({ onLogout }: FaceDetectionProps) => {
	const [imageUrl, setImageUrl] = useState("");
	const [detectionData, setDetectionData] = useState<FaceDetectionData>();

	const handleUrlSubmit = async (url: string) => {
		setImageUrl(url);
		setDetectionData(undefined);
		const newData = await getFaceDetectionData(url);
		setDetectionData(newData);
	};
	const handleLogout = async () => {
		await logout();
		onLogout();
	};

	return (
		<div>
			<h2>Face Detection</h2>
			<div
				className="container"
				style={{
					position: "relative",
					display: imageUrl ? "inline-block" : "none",
				}}
			>
				<img src={imageUrl} alt="Image to detect" />
				{imageUrl && !detectionData && (
					<p
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							color: "red",
						}}
					>
						Detecting Faces
					</p>
				)}
				<div className="boxes">
					{detectionData?.map((face, index) => (
						<div
							key={index}
							style={{
								position: "absolute",
								top: face.top,
								left: face.left,
								width: face.width,
								height: face.height,
								border: "2px solid red",
							}}
						></div>
					))}
				</div>
			</div>
			<UrlForm OnUrlSubmit={handleUrlSubmit} />
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default FaceDetection;
