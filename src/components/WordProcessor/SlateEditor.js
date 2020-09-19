import React, { useState } from 'react'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'
import { Value } from 'slate'
import { Block } from 'slate'

// const initialValue = Plain.deserialize('Hello World')


function SlateEditor() {
    const initialValue = Value.fromJSON({
        document: {
        nodes: [
          {
            object: 'block',
            type: 'paragraph',
            nodes: [
              {
                object: 'text',
                leaves: [
                  {
                    text: 'A line of text in a paragraph.',
                  },
                ],
              },
            ],
          },
        ],}, });
  const [value, setValue] = useState(initialValue)

 const onChange = ({ value }) => {

    setValue(value);
 }
  return <div className="App">
    <Editor
      value={value}
      onChange={(change) => setValue(change.value)}
    />
  </div>
}

export default SlateEditor;






// import React from 'react'
// import Editor from 'react-slate-editor'

// const toolbar = ['bold', 'italic', 'underline', 'code', 'fontSize', 'sizeUp', 'sizeDown', 'link', 'image', 'orderedList', 'unorderedList', 'alignment']
 
// function SlateEditor() {
 
//   function onEditorChange(value) {  
//     postToApi(value)
//   }
 
//   return (
//     <Editor
//       initialValue={'<p></p>'}
//       onEditorChange={onEditorChange}
//       toolbar={toolbar} 
//       customize your toolbar
//       uploadServerLink={'https://whereyouuploadit.com'} 
//       accessToken={'add your server token'} 
//     />
//   );
// }
// export default SlateEditor;