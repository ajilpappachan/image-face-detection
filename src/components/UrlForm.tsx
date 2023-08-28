import { ChangeEvent, FormEvent, useState } from "react";

type UrlFormProps = {
	OnUrlChange?: (url: string) => void;
	OnUrlSubmit: (url: string) => void;
};

const UrlForm = ({ OnUrlChange, OnUrlSubmit }: UrlFormProps) => {
	const [url, setUrl] = useState("");

	const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUrl(event.target.value);
		OnUrlChange && OnUrlChange(event.target.value);
	};

	const handleUrlSubmit = (event: FormEvent) => {
		event.preventDefault();
		OnUrlSubmit(url);
	};

	return (
		<form onSubmit={handleUrlSubmit}>
			<label htmlFor="url">Image URL</label>
			<input type="text" name="url" onChange={handleUrlChange} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default UrlForm;
