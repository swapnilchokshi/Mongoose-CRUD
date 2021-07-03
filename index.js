const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Student = require('./models/student');


mongoose.connect('mongodb://localhost:27017/studentApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo Connection successful");
    })
    .catch(err => {
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/students', async (req, res) => {
    const students = await Student.find({})
    //console.log(students);
    res.render('students/index', { students })
})

app.get('/students/new', (req, res) => {
    res.render('students/new');
})

app.get('/students/:id/edit', async (req, res) => {
    const {id} = req.params;
    const student = await Student.findById(id);
    res.render('students/edit', { student });
})

app.post('/students', async (req, res) => {
    //console.log(req.body);
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.redirect('students');
})

app.get('/students/:id', async (req, res) => {
    const {id} = req.params;
    const student = await Student.findById(id);
    //console.log(student);
    res.render('students/details', { student })
})


app.put('/students/:id', async (req, res) => {
    //console.log(req.body);
    const {id} = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/students/${student._id}`);
})

app.delete('/students/:id', async (req, res) => {
    //console.log(req.body);
    const {id} = req.params;
    await Student.findByIdAndDelete(id)
    res.redirect('/students');
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})