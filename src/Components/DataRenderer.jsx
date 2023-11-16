import React from "react";

function DataRenderer({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p className="blog-author">Written by {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DataRenderer;
