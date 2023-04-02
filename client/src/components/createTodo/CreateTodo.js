import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CreateTodo.css";

const CreateTodo = () => {
  const [data, setData] = useState({ title: "", description: "" });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      id: data._id,
      title: data.title,
      description: data.description,
    };
    console.log({ todo });

    axios
      .post("http://localhost:8000/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((error) => {
        console.log("Error couldn't create TODO");
        console.log(error.message);
      });
  };

  return (
    <div className="createContainer">
      <div className="createContents">
        <h1>CREATE &nbsp; TODO</h1>
        <form onSubmit={handleSubmit} className="formContainer" noValidate>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="input"
          />
          <div className="buttonGroup">
            <button type="submit" className="createButton">
              Create Todo
            </button>
            <Link to="/" className="back">
              <button type="button" className="buttonBack">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
