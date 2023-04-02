import { useState } from "react";
import React from "react";
import axios from "axios";
import "./UpdateTodo.css";

const UpdateTodo = ({ _id, handleClose, handleUpdate }) => {
  const [data, setData] = useState({ title: "", description: "" });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ _id }, { data });

    axios
      .put(`http://localhost:8000/api/todo/${_id}`, data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Failed to update todo");
        console.log(err.message);
      });
  };
  return (
    <form
      className="formContainer"
      onSubmit={(event) => {
        handleSubmit(event);
        handleUpdate();
        handleClose();
      }}
    >
      <div className="modal">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea
          type="text"
          className="input"
          name="description"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateTodo;
