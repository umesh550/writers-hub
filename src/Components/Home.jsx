// Rename the file to Home.js
import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import DataRenderer from "./DataRenderer";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const handleDataFetched = (data) => {
    setBlogs(data);
    setError(null); // Clear any previous errors
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div className="content">
      <h2>All Blogs</h2>
      <DataFetcher onDataFetched={handleDataFetched} onError={handleError} />
      {error ? <p>Error: {error}</p> : <DataRenderer blogs={blogs} />}
    </div>
  );
}

export default Home;
