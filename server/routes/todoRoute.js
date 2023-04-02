const express = require('express');
const TodoRouter = express.Router();
const {getAllTodo, postCreateTodo, putUpdateTodo, deleteTodo} = require('../controllers/todoController')

TodoRouter.get('/', getAllTodo )

TodoRouter.post('/', postCreateTodo )
TodoRouter.put('/:id', putUpdateTodo)
TodoRouter.delete('/:id', deleteTodo )

module.exports = TodoRouter;