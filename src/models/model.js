const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        unique: true,
        type: String,
        minLength: 1,
        maxLength: 20
    },
    description: {
        required: true,
        type: String,
        minLength: 1,
        maxLength: 50
    }
},{ timestamps: true }
);

module.exports = mongoose.model('Data', dataSchema);