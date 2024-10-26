const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
