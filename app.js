const express = require('express');
const app = express();

const studentRoutes = require('./routes/Student-Routes');

// Logger middleware
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(req.method, req.originalUrl, time);
    next();
});

app.use(express.json());

app.use('/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});