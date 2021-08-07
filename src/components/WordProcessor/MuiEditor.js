import React,{useEffect,useState} from "react";
import MUIRichTextEditor from "mui-rte";

function MuiEditor() {
	const [text_value, setText_Value] = useState('');
	const save = (data) => {
		console.log("MUI TEXT",data);
	};

useEffect(() => {
	 console.log("MUI Text Value",text_value );
	//  console.log("MUI Text Valueaaaaaaaaa",data );
}, [text_value])

	return (
		<MUIRichTextEditor
			label="Type something here..."
			onSave={save}
			inlineToolbar={true}
			
		 
		/>
	)
}
export default MuiEditor;