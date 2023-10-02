import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

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
		<Form onSubmit={handleUrlSubmit}>
			<Form.Group controlId="url">
				<Form.Label>Url</Form.Label>
				<Form.Control type="url" onChange={handleUrlChange} />
			</Form.Group>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default UrlForm;
