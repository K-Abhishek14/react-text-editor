import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function WordProcessQuill() {
	const [text, setText] = useState('')

	const handleChange = (value) => {
		setText(value)
	}

	return (
		<ReactQuill value={text} onChange={handleChange} />
	)
}