import { ActionFunctionArgs } from "react-router-dom";
import getFaceDetectionData, {
	FaceDetectionData,
} from "../../utils/getFaceDetectionData";

interface FaceDetectionActionData {
	imageUrl: string;
	detectionData?: FaceDetectionData;
	error?: string;
}

const faceDetectionAction = async ({
	request,
}: ActionFunctionArgs): Promise<FaceDetectionActionData> => {
	const formData = await request.formData();
	const url = formData.get("url")?.toString();
	if (!url) {
		return {
			imageUrl: "",
			error: "Empty Image Url",
		};
	}
	try {
		const faceData = await getFaceDetectionData(url);
		return {
			imageUrl: url,
			detectionData: faceData,
		};
	} catch (error) {
		return {
			imageUrl: url,
			error: error instanceof Error ? error.message : (error as string),
		};
	}
};

export type { FaceDetectionActionData };
export default faceDetectionAction;
