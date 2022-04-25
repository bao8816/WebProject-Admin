const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nile1087:nile19072001@cluster0.teu64.mongodb.net/web_project?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error: ', error);
    }
};

module.exports = { connect };
