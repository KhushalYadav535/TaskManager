const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db'); // Ensure your db.js file is located correctly
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from the server');
});
app.use('/tasks', TaskRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
});
