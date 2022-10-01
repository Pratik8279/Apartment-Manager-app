import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_data } from "../../Redux/actions";
import styles from "./Home.module.css";
import SingleUnit from "./SingleUnit";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.data);
  const loading = useSelector((state) => state.app.loading);

  console.log(data);
  useEffect(() => {
    dispatch(get_data());
  }, []);
  if (loading)
    return (
      <>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </>
    );
  return (
    <div>
      <table className="table  m-auto table-striped table-hover">
        <thead>
          <tr>
            <td>Sr No</td>
            <td>Name</td>
            <td>Wing</td>
            <td>Room No</td>
            <td>Type</td>
            <td>Contact No</td>
            <td>Maintainance Status</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((ele) => (
              <tr key = {ele.id}>
               <SingleUnit data= {ele} id= {ele.id}/>
               </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
