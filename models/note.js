const mongoose = require('mongoose');

mongoose
    // eslint-disable-next-line no-undef
    .connect(process.env.MONGO_URI)
    .then((result) => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message);
    });

const noteSchema = new mongoose.Schema({
    content: { type: String, minLength: 5, required: true },
    date: { type: Date, required: true },
    important: Boolean,
});

module.exports = mongoose.model('Note', noteSchema);
