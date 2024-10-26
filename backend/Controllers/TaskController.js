const Task = require('../Models/TaskModel'); // Ensure this path is correct

// Create a new task
const createTask = async (req, res) => {
    const { taskName, isDone } = req.body;
    try {
        const newTask = new Task({ taskName, isDone });
        await newTask.save();
        res.status(201).json({ success: true, message: 'Task created successfully', data: newTask });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create task', error: error.message });
    }
};

// Fetch all tasks
const fetchAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: error.message });
    }
};

// Update a task by ID
const updateTaskById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        res.status(200).json({ success: true, message: 'Task updated successfully', data: updatedTask });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update task', error: error.message });
    }
};

// Delete a task by ID
const deleteTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        res.status(200).json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete task', error: error.message });
    }
};

module.exports = {
    createTask,
    fetchAllTasks,
    updateTaskById,
    deleteTaskById,
};
