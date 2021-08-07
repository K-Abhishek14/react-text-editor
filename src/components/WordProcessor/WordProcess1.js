import React, { useState,useEffect } from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
export default function WordProcess1() {
	const [editor_Value, setEditor_Value] = useState('');

	useEffect(() => {
		console.log("Editor Value", editor_Value);
	},[editor_Value])
	return (
		<DocumentEditorContainerComponent
			id="container"
			style={{ height: '100vh' }}
			serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
			enableToolbar={true}
			onChange = {(e) => setEditor_Value(e.target.value)}
		/>
	)
}
