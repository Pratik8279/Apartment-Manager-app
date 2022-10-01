import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_data } from "../../Redux/actions";

function SingleUnit({ data, id }) {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch()

  return (
    <>
      <td>{data.id}</td>
      <td>
        {data.first_name} {data.last_name}
      </td>
      <td>{data.wing}</td>
      <td>{data.room_no}</td>
      <td>{data.type}</td>
      <td>{data.contact_no}</td>
      <td onClick={() => setCheck(!check)}>{check ? "Paid" : "Pending"}</td>
      <td><button onClick= {()=> dispatch(delete_data(id))}>Delete</button></td>
      <td><Link to= {`/${id}`}>View</Link></td>
    </>
  );
}

export default SingleUnit;
