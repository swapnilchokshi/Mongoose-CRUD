const mongoose = require('mongoose');

//Creating a schema
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name.']
    },
    roll: {
        type: Number,
        required: [true, 'Please enter roll number.']
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ['Male', 'Female','Other'],
            message: 'Please select gender from (Male/Female/Other)'
        }
    },
    std: {
        type: String
    }
});

//Creating a model
const Student = mongoose.model('Student', dataSchema);

//Exporting the model
module.exports = Student;