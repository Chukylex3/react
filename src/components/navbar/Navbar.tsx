import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const title = "Nigeria is my country";
  console.log(title);
  return (
    <div>
      <h1 className="fh">{title}</h1>
      <p style={{ color: "green", backgroundColor: "aqua", fontSize: "2em" }}>
        welcome
      </p>
    </div>
  );
};

export default Navbar;
