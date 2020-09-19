import React from "react";
import MUIRichTextEditor from "mui-rte";

function MuiEditor(){
    const save = (data) => {
        console.log(data);
      };

    return(
        <MUIRichTextEditor
        label="Type something here..."
        onSave={save}
        inlineToolbar={true}
      />
    )
}

export default MuiEditor;