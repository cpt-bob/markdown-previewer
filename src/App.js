import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="editor-container">
        <div className="toolbar"></div>
        <textarea id="editor" type="text"></textarea>
      </div>
      <div className="converter"></div>
      <div className="preview-container">
        <div className="toolbar"></div>
        <div className="preview" id="preview">
          <h1></h1>
          <h2></h2>
          <a></a>
          <p id="inline-code"></p>
          <p id="code-block"></p>
          <li></li>
          <blockquote></blockquote>
          <img />
          <p id="bolded-text"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
