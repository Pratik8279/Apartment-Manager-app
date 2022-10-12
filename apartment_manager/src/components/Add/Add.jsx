import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_data } from "../../Redux/actions";
import Load from "../Home/Load";
import styles from "./Add.module.css";

function Add() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_data(formData));
  };

  return (
    <>
      <form id={styles.form} onSubmit={handleSubmit}>
        <h2>Add Resident's Information here</h2>
        <input
          type="text"
          name="first_name"
          placeholder="Enter First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Enter Gender"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Add Image Url"
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact_no"
          placeholder="Add Contact Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Owner Type"
          onChange={handleChange}
        />
        <input
          type="text"
          name="wing"
          placeholder="Enter Wing"
          onChange={handleChange}
        />
        <input
          type="text"
          name="room_no"
          placeholder="Enter Room Number"
          onChange={handleChange}
        />
        <input type="submit" id={styles.btn} value="SUBMIT" />
      </form>
    </>
  );
}

export default Add;
