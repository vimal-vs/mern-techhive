const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: true,
        min: 1,
        max: 30
    },
    description: {
        required: true,
        type: String,
        min: 1,
        max: 100
    }
},{ timestamps: true }
);

module.exports = mongoose.model('Data', dataSchema);