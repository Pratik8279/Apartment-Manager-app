import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_data, get_data, edit_data } from "../../Redux/actions";
import styles from "./Home.module.css";

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
    console.log(id)
    setForm({
      ...form,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log(data)
    let page = localStorage.getItem("page");
    e.preventDefault();
    console.log(form);
    dispatch(edit_data(form, id)).then(() => {
      dispatch(get_data(page));
    });
  };

  const updateIt = ()=>{

  }
  return (
    <>

      <>
        <td>{data.id}</td>
        <td>
          {data.first_name} {data.last_name}
        </td>
        <td>{data.wing}</td>
        <td>{data.room_no}</td>
        <td>{data.type}</td>
        <td>{data.contact_no}</td>
        <td id={styles.td} onClick={() => setCheck(!check)}>
          {check ? "Paid" : "Pending"}
        </td>
        <td>
          <button id={styles.btn} onClick={() => handleClick(id)}>Delete</button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
        </td>
        <td>
          <Link to={`/${id}`}>View</Link>
        </td>
        <td>
        <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                name="first_name"
                placeholder="Update First Name"
                defaultvalue={data.first_name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="last_name"
                placeholder="Update Last Name"
                defaultvalue={data.last_name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="wing"
                placeholder="Update Wing"
                defaultvalue={data.wing}
                onChange={handleChange}
              />

              <input
                type="number"
                name="room_no"
                placeholder="Update Room Number"
                defaultvalue={data.room_no}
                onChange={handleChange}
              />

              <input
                type="text"
                name="type"
                placeholder="Update Owner type"
                defaultvalue={data.type}
                onChange={handleChange}
              />

              <input
                type="text"
                name="contact_no"
                placeholder="Update Contact Number"
                defaultvalue={data.contact_no}
                onChange={handleChange}
              />

              <input
                type="number"
                name="age"
                placeholder="Update Age"
                defaultvalue={data.age}
                onChange={handleChange}
              />

              <input
                type="text"
                name="gender"
                placeholder="Update Gender"
                defaultvalue={data.gender}
                onChange={handleChange}
              />

              <input
                type="text"
                name="image"
                placeholder="Update Image Url"
                defaultvalue={data.image}
                onChange={handleChange}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleSubmit} type="button" class="btn btn-primary" data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
        </td>
      </>
    </>
  );
}

export default SingleUnit;
