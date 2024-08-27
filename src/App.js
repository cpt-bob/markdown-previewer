import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(
    `# This is a markdown editor for you to see how markdown works. For example: This is the biggest heading. Feel free to delete the examples and try it for yourself.

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

Want to send someone to your website? No problem. 
You can use a [link](www.google.com) to send them your way.

Here's something that can draw your attention
> Block Quotes, Whoohoo! 
*bonus if you sang that in the tune to the Ducktails song.

You can even use it to make tables like so:

Tic | Tac | Toe

X | X | O
X | O | X
O | X | O

- Need a list? You can do that too
  - They are indented
    - With different bullets

1. You can also do numbered lists too
1. Don't even have to number them with anything other than 1s either
1. It's kinda weird actually

You can even add an image if you'd like with the use of an explanation point like this:

![Linux Tux Logo](https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg)

    `
  );

  return (
    <div className="App">
      <div className="editor-container">
        <div className="title-bar">Editor</div>
        <Editor id="editor" onChange={setMarkdown} initialValue={markdown} />
      </div>
      <div className="preview-container">
        <div className="title-bar">Preview</div>
        <Preview id="preview" markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
