import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div id={styles.nav}>
      <Link to="/">HOME</Link>
      <Link to="/add">ADD NEW INFO</Link>
    </div>
  );
}

export default Navbar;
