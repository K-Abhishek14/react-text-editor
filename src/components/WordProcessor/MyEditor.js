import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

 function MyEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    return (
        <>
            <Editor editorState={editorState} onChange={setEditorState} />
        
        </>
    )

}
export default MyEditor;
