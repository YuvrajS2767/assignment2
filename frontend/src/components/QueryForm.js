import React, { useState } from "react";
import axios from "axios";

const QueryForm = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitQuery = () => {
    axios.post("/query/", { query_text: query })
      .then(response => setAnswer(response.data.answer))
      .catch(error => alert("Error getting answer"));
  };

  return (
    <div>
      <input type="text" value={query} onChange={onQueryChange} />
      <button onClick={onSubmitQuery}>Submit Query</button>
      <div>
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QueryForm;
