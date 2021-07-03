const mongoose = require('mongoose');
const Student = require('./models/student');

mongoose.connect('mongodb://localhost:27017/studentApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo Connection successful");
    })
    .catch(err => {
        console.log(err);
    })

//Insertion using an Instance
const student1 = new Student({
    name: 'Swapnil', 
    roll: 1, 
    gender: 'Male', 
    std: 'XII'
});
student1.save()
    .then(data => {
        console.log("One Student Data added successfully.");
        console.log(data);
    })
    .catch(err => {
        console.log("Error occured during insertion.");
        console.log(err);
    })


//Insertion using a Model method
const students = [
    {
        name: 'Chokshi',
        roll: 2,
        gender: 'Male',
        std: 'XII'
    },
    {
        name: 'Shyam',
        roll: 3,
        gender: 'Female',
        std: 'XII'
    },
    {
        name: 'Krishna',
        roll: 4,
        gender: 'Female',
        std: 'X'   
    },
    {
        name: 'Raj',
        roll: 5,
        gender: 'Male',
        std: 'X'
    },
    {
        name: 'Ram',
        roll: 6,
        gender: 'Male'
    },
    {
        name: 'Jimmy',
        roll: 7,
        gender: 'Other'   
    },
    {
        name: 'Shivam',
        roll: 8,
        gender: 'Male'
    },
    {
        name: 'Krupali',
        roll: 9,
        gender: 'Female'
    },
    {
        name: 'Nidhi',
        roll: 10,
        gender: 'Female',
        std: 'X'   
    },
    {
        name: 'Rishi',
        roll: 11,
        gender: 'Male'
    },
    {
        name: 'Shivani',
        roll: 12,
        gender: 'Female',
        std: 'XII'
    },
    {
        name: 'Suresh',
        roll: 13,
        gender: 'Male' 
    },
    {
        name: 'Soham',
        roll: 14,
        gender: 'Male',
        std: 'XI'
    },
    {
        name: 'Sam',
        roll: 15,
        gender: 'Other',
        std: 'XI'
    }
]

Student.insertMany(students)
    .then(data => {
        console.log("Multiple Student Data added successfully");
        console.log(data);
    })
    .catch(err => {
        console.log("Error occured during multiple insertions.");
        console.log(err);
    })