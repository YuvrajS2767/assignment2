import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios.post("/upload/", formData)
      .then(response => alert("File uploaded successfully"))
      .catch(error => alert("Error uploading file"));
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
