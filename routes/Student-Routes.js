const express = require('express');
const router = express.Router();

let students = [];
let nextId = 1;

// Get all students
router.get('/', (req, res) => {
    res.status(200).json(students);
});

// Add a student
router.post('/', (req, res) => {
    const { name, course } = req.body;

    if (typeof name !== 'string' || !name.trim() ||
        typeof course !== 'string' || !course.trim()) {
        return res.status(400).json({
            message: 'Name and course are required'
        });
    }

    const student = {
        id: nextId++,
        name: name.trim(),
        course: course.trim()
    };

    students.push(student);
    res.status(201).json(student);
});

// Update a student
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            message: 'Invalid student ID'
        });
    }

    const student = students.find(item => item.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    const { name, course } = req.body;

    if (typeof name !== 'string' || !name.trim() ||
        typeof course !== 'string' || !course.trim()) {
        return res.status(400).json({
            message: 'Name and course are required'
        });
    }

    student.name = name.trim();
    student.course = course.trim();

    res.status(200).json(student);
});

// Delete a student
