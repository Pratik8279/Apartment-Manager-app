import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_data, get_data, edit_data } from "../../Redux/actions";
import styles from "./Home.module.css"

function SingleUnit({ data, id }) {
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleClick = (id) => {
    let page = localStorage.getItem("page");
    dispatch(delete_data(id)).then(() => {
      dispatch(get_data(page));
    });
  };

  const handleChange = (e) => {
    let inputName = e.target.name;
    setForm({
      ...form,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    let page = localStorage.getItem("page");
    e.preventDefault();
    console.log(form);
    dispatch(edit_data(form, id)).then(() => {
      dispatch(get_data(page));
    });
  };

  return (
    <>
      {edit ? (
        <>
          <td>
            <input
              type="text"
              name="first_name"
              placeholder="Update First Name"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="last_name"
              placeholder="Update Last Name"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="wing"
              placeholder="Update Wing"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="room_no"
              placeholder="Update Room Number"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="type"
              placeholder="Update Owner type"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="contact_no"
              placeholder="Update Contact Number"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="age"
              placeholder="Update Age"
              onChange={handleChange}
            />
          </td>
          <td>
            {" "}
            <input
              type="text"
              name="gender"
              placeholder="Update Gender"
              onChange={handleChange}
            />{" "}
          </td>
          <td>
            {" "}
            <input
              type="text"
              name="image"
              placeholder="Update Image Url"
              onChange={handleChange}
            />{" "}
          </td>
          <td>
            <button onClick={handleSubmit}>Update</button>
          </td>
        </>
      ) : (
        <>
          <td>{data.id}</td>
          <td>
            {data.first_name} {data.last_name}
          </td>
          <td>{data.wing}</td>
          <td>{data.room_no}</td>
          <td>{data.type}</td>
          <td>{data.contact_no}</td>
          <td id= {styles.td} onClick={() => setCheck(!check)}>{check ? "Paid" : "Pending"}</td>
          <td>
            <button onClick={() => handleClick(id)}>Delete</button>
          </td>
          <td>
            <button onClick={() => setEdit(!edit)}>Edit</button>
          </td>
          <td>
            <Link to={`/${id}`}>View</Link>
          </td>
        </>
      )}
    </>
  );
}

export default SingleUnit;
