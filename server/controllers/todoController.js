const TodoModel = require('../models/todoModel');

exports.getAllTodo = (req, res) => {
    TodoModel.find()
      .then((todo) => {
        res.json(todo)
      })
      .catch((err) => {
        res.status(404).json({message: "Todo not found", error: err.message})
    });
};

exports.postCreateTodo =  (req, res) => {
    TodoModel.create(req.body)
      .then((data) => {
        res.json({message: "Todo created", data})
      })
      .catch((err) => {
        res.status(400).json({message: "Failed to add todo", error: err.message})
      });
};


exports.putUpdateTodo =  (req, res) => {
    TodoModel.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        res.json({message: "Updated successfully",data})
      })
      .catch((err) => {
        res.status(400).json({message: "Failed to update todo", error: err.message})
      });
};


exports.deleteTodo =  (req, res) => {
    TodoModel.findByIdAndRemove(req.params.id, req.body)
      .then((data) => {
        res.json({message: "Deleted successfully",data})
      })
      .catch((err) => {
        res.status(404).json({message: "Todo not found", error: err.message})
      });
};