import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(
    `# This is a markdown editor for you to see how markdown works. This is the biggest heading.

## This is a smaller heading...

### And and even smaller one. We could keep going.

You can also put code into some backticks like this- \`<div></div>\`

or you can also put multi-line code using 3 backticks like this-

\`\`\`
function exampleFunction(firstLine, lastLine) {
  if (firstLine === "3 backticks" && lastLine === "3 backticks") {
    return multilineCode;
  }
}
\`\`\`

You can also use markdown to style your words!

You can make your words **bold**, _italic_, or even **_both_**.
There's even a way you can cross out ~~words like this~~.

    `
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
