import React from "react";
import { marked } from "marked";

function Preview({ markdown }) {
  const getMarkdownText = () => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div className="preview" dangerouslySetInnerHTML={getMarkdownText()} />
  );
}

export default Preview;
