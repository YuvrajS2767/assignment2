import React from "react";
import FileUpload from "./components/FileUpload";
import QueryForm from "./components/QueryForm";

function App() {
  return (
    <div className="App">
      <h1>Document Management System</h1>
      <FileUpload />
      <QueryForm />
    </div>
  );
}

export default App;
