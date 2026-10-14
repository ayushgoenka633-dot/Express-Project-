const express = require('express');
const app = express();

const studentRoutes = require('./routes/Student-Routes');

app.use(express.json());
app.use('/students', studentRoutes);

app.listen(3000, function () {
    console.log('Server running on port 3000');
});