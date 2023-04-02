import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateTodo from "../updateTodo/UpdateTodo";
import "./ShowTodo.css";


const TodoCard = ({ data, handleEdit, handleDelete }) => {
  const { _id, title, description } = data;
  return (
    <li key={_id}>
      <div className="titleDescription">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="buttonContainer">
        <button
          type="button"
          className="button"
          name={_id}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="button"
          name={_id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

const ShowTodo = () => {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [update]);

  const handleEdit = (event) => {
    setId(event.target.name);
    setOpen(true);
  };

  const handleUpdate = () => {
    console.log("update:", update, !update);
    setUpdate(!update);
  };

  const handleDelete = (event) => {
    axios.delete(`http://localhost:8000/api/todo/${event.target.name}`);
    setTodo((data) => {
      return data.filter((todo) => todo._id !== event.target.name);
    });
    console.log(event.target.name);
  };

  const handleClose = () => {
    setId("");
    setOpen(false);
  };
  return (
    <div className="container">
      <div className="headContent">
        <h1>TODO &nbsp; APP</h1>
        <br />
        <Link to="/createtodo" className="buttonNew">
          <button className="button"> Add New Todo </button>
        </Link>
      </div>

      <div className="contents">
        <ul className="listContainer">
          {todo.map((data, id) => {
            return (
              <TodoCard
                data={data}
                key={id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </ul>
      </div>
      {open ? (
        <div className="updateContainer">
          <div className="updateContents">
            <p onClick={handleClose} className="close">
              X
            </p>
            <h2>UPDATE &nbsp; TODO</h2>
            <UpdateTodo
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowTodo;
