const config = require('./utils/config');
const express = require('express');
const app = express();
const notesRouter = require('./controllers/notes');
const mongoose = require('mongoose');

mongoose
    .connect(config.MONGO_URI)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

app.use(express.json());

app.use('/api/notes', notesRouter);

app.use(require('./middleware/error-handler'));

module.exports = app;
