const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
    }
});

const TodoModel = mongoose.model('Todo', TodoSchema);
module.exports = TodoModel;