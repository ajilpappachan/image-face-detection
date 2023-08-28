import axios from "axios";

type DetectedFace = {
	BoundingBox: {
		startX: number;
		startY: number;
		endX: number;
		endY: number;
	};
	Probability: number;
};

type FaceDetectionResponse = {
	detected_faces: DetectedFace[];
};

type FaceDetectionBounds = {
	top: number;
	left: number;
	width: number;
	height: number;
};

export type FaceDetectionData = FaceDetectionBounds[];

const getFaceDetectionData = async (
	url: string
): Promise<FaceDetectionData | undefined> => {
	const options = {
		method: "POST",
		url: import.meta.env.VITE_RAPIDAPI_URL,
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
			"X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
		},
		data: {
			url: url,
			accuracy_boost: 3,
		},
	};

	try {
		const response = await axios.request<FaceDetectionResponse>(options);
		const detectionData: FaceDetectionData = response.data.detected_faces.map(
			(face) => ({
				left: face.BoundingBox.startX,
				top: face.BoundingBox.startY,
				width: face.BoundingBox.endX - face.BoundingBox.startX,
				height: face.BoundingBox.endY - face.BoundingBox.startY,
			})
		);
		return detectionData;
	} catch (error) {
		console.error(error);
	}
};

export default getFaceDetectionData;
