import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(
    "# This is a markdown editor for you to see how markdown works"
  );

  return (
    <div className="App">
      <div className="editor-container">
        <Editor id="editor" onChange={setMarkdown} initialValue={markdown} />
      </div>
      <div className="preview-container">
        <Preview id="preview" markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
