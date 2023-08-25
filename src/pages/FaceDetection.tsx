export type FaceDetectionProps = {
	onLogout: () => void;
};

const FaceDetection = ({ onLogout }: FaceDetectionProps) => {
	return (
		<div>
			<p>FaceDetection</p>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};

export default FaceDetection;
