type FaceDetectionProps = {
	OnLogout: () => void;
};

const FaceDetection = ({ OnLogout }: FaceDetectionProps) => {
	return (
		<div>
			<button onClick={OnLogout}>Logout</button>
			<p>FaceDetection</p>
		</div>
	);
};

export default FaceDetection;
