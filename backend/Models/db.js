const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
    console.error('DB_URL environment variable is not defined');
    process.exit(1);
}

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB is Connected...');
    })
    .catch((err) => {
        console.error('MongoDB Connection Error:', err);
    });
