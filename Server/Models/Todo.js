const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done : {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.mmodel("todos", TodoSchema)
module.exports = TodoModel;