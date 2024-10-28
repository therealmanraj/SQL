// src/components/SQLEditor.jsx
import { useState } from "react";
import Editor from "./Editor";
import "../styles/SQLEditor.css";

const SQLEditor = () => {
  const [query, setQuery] = useState("SELECT * FROM Customers");
  const [result, setResult] = useState("");

  // Mock function to execute the query
  const executeQuery = (query) => {
    // For now, we'll just set the result to display the query as output.
    // Replace this with real execution logic if connected to a backend.
    setResult(`Executed Query:\n${query}`);
  };

  return (
    <div className="sql-editor-container">
      <div className="sidebar left-sidebar">
        {" "}
        {/* Left sidebar for future use */} <h1>Left Sidebar</h1>
      </div>
      <div className="main-editor">
        <h2>SQL Editor</h2>
        <Editor setQuery={setQuery} query={query} executeQuery={executeQuery} />
        <div className="result">
          <h3>Query Result:</h3>
          <pre>{result || "No query executed yet"}</pre>
        </div>
      </div>
      <div className="sidebar right-sidebar">
        {" "}
        {/* Right sidebar for future use */} <h1>Right Sidebar</h1>
      </div>
    </div>
  );
};

export default SQLEditor;
