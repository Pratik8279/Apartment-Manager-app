import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  let get_data = async () => {
    try {
      let res = await fetch(`https://pratikmock.herokuapp.com/info/${id}`);
      let info = await res.json();
      setData(info);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_data();
  }, []);
  return (
    <div id={styles.main}>
      <div id={styles.unit}>
        <img src={data.image} alt="" />
        <div id={styles.info}>
          <h3>
            {" "}
            Name : {data.first_name} {data.last_name}
          </h3>
          <p> Gender : {data.gender}</p>
          <p> Age : {data.age}</p>
          <p> Contact No : {data.contact_no}</p>
          <p> Wing : {data.wing}</p>
          <p> Room No : {data.room_no}</p>
          <p> Type : {data.type}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
