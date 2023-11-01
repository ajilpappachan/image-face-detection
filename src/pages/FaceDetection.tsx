import { Form, useActionData } from "react-router-dom";
import { FaceDetectionActionData } from "./actions/FaceDetection.action";

const FaceDetection = () => {
	const actionData = useActionData() as FaceDetectionActionData | undefined;

	return (
		<>
			<h2>Face Detection</h2>
			{actionData && (
				<div
					className="container"
					style={{
						position: "relative",
					}}
				>
					<img src={actionData.imageUrl} alt="Image to detect" />
					{actionData.detectionData && (
						<div className="boxes">
							{actionData.detectionData.map((face, index) => (
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
					)}
				</div>
			)}
			<Form method="post" action="/facedetection">
				<input type="url" name="url" placeholder="Enter Image Url" />
				<button type="submit">Submit</button>
			</Form>
			{actionData?.error && <div>{actionData.error}</div>}
		</>
	);
};

export default FaceDetection;
