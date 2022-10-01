import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_data } from "../../Redux/actions";
import styles from "./Navbar.module.css";

function Navbar() {
  const [page,setPage] = useState(1)
  let num = useSelector((state)=> state.app.total)
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(get_data(page))
},[page])
const handleClick = (val)=>{
  if (page + val > 1 && page + val <= num + 2) {
    setPage(val)
  }
}
  return (
    <div id={styles.nav}>
      <div>
        <button  disabled= {page == 1} onClick= {() => handleClick(page-1)}>Prev</button>
        <button onClick= {() => handleClick(page+1)}>Next</button>
      </div>
      <Link to="/">Home</Link>
      <Link to="/add">ADD NEW INFO</Link>
    </div>
  );
}

export default Navbar;
