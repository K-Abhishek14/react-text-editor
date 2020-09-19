import React, { useState } from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

export default function WordProcess1() {
	return (

		<DocumentEditorContainerComponent
			id="container"
			style={{ height: '100vh' }}
			serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
			enableToolbar={true}
		/>
	)
}
