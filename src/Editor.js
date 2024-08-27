import React, { useState, useEffect } from "react";

function Editor({ onChange, initialValue }) {
  const [text, setText] = useState(initialValue || "");

  useEffect(() => {
    setText(initialValue);
  }, [initialValue]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    if (onChange) {
      onChange(newText);
    }
  };

  return (
    <textarea
      id="editor"
      value={text}
      onChange={handleChange}
      placeholder="Enter markdown here"
      rows="10"
      cols="50"
    />
  );
}

export default Editor;
