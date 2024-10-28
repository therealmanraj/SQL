// src/components/Editor.jsx
import { useState, memo } from "react";
import PropTypes from "prop-types";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

const Editor = ({ setQuery, query, executeQuery }) => {
  const [content, setContent] = useState(query);

  return (
    <div className="editor">
      <CodeMirror
        value={content}
        extensions={[sql()]}
        onChange={(value) => {
          setContent(value);
        }}
      />
      <div className="buttons">
        <button
          className="clear button"
          onClick={() => {
            setQuery("");
            setContent(""); // Clear the editor content as well
          }}
        >
          Clear
        </button>
        <button
          className="run button"
          onClick={() => {
            setQuery(content);
            executeQuery(content);
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
};

// Define prop types for validation
Editor.propTypes = {
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  executeQuery: PropTypes.func.isRequired,
};

export default memo(Editor);
