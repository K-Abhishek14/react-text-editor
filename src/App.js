import React from 'react';
import './App.css';
import MuiEditor from './components/WordProcessor/MuiEditor';
import WordProcessQuill from './components/WordProcessor/WordProcessQuill';
import Editor1 from './components/WordProcessor/Editor1';
import WordProcess1 from './components/WordProcessor/WordProcess1';
import TinyEditor from './components/WordProcessor/NewEditor';
import DraftEditor from './components/WordProcessor/DraftEditor';

// import RichTextEditor from './components/WordProcessor/RichTextEditor';
// import SlateEditor from './components/WordProcessor/SlateEditor';

function App() {
  return (
    <div className="App">
      {/* <TinyEditor /> */}
      {/* <DraftEditor /> */}
      {/* <WordProcess1 /> */}
      {/* <WordProcessQuill /> */}
      {/* <MuiEditor /> */}
      <Editor1 />
      {/* <SlateEditor /> */}
      {/* <RichTextEditor /> */}
    </div>
  );
}
export default App;
