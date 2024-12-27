const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get employees data
app.get('/api/employees', (req, res) => {
    try {
        const data = fs.readFileSync('../employee-salary-app/employees.json');
        const employees = JSON.parse(data);
        res.json(employees);
    } catch (error) {
        console.error('Error reading employees.json:', error);
        res.status(500).send('Error reading employees.json');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
