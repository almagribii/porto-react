import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}
      >
        Brucad Al Magribi
      </Link>
      <nav>
        <Link to="/about" style = {{ color: "white", marginRight: "1rem", textDecoration: "none" }}>About</Link>
        <Link to="/skills" style = {{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Skiills</Link>
        <Link to="/projects" style = {{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Projects</Link>
        <Link to="/blog" style = {{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Blog</Link>
        <Link to="/contact" style = {{ color: "white", textDecoration: "none" }}>Contact</Link>
        </nav>
    </header>
  );
}

export default Header;
