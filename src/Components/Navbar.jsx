import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <h2>Writers Hub</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/NewBlog">New Blog</Link>
      </nav>
    </header>
  );
}

export default Navbar;
