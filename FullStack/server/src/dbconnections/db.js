const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");


const dotenv = require('dotenv').config();

const app = express();

//Middleware
app.use(cors(``));

app.use(express.json());

//Create connection
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 2,
});

app.get('/', (req, res) => {

	res.send(`Hey the backend is running...!!!`);

});

app.get('/api/v1/employees', (req, res) => {
	pool.query(`SELECT * FROM missionready.employees`, (err, results) => {
		if (err) {
			res.status(500).json({ err: 'Error retrieving data from database' });
		} else {
			res.json(results);
		}
	});
});


app.get('/api/v1/employees/:id', (req, res) => {
	const id = req.params.id;
	pool.query(`SELECT * FROM missionready.employees WHERE employeeNumber = ${id}`, (err, results) => {
		if (err) {
			res.status(500).json({ error: 'Error retrieving data from database for id ' + id });
		} else if (results.length === 0) {
			res.status(404).json({ error: 'No employee found with ID ' + id });
		} else {
			res.json(results[0]);
		}
	});
});

app.put('/api/v1/employees/:id', (req, res) => {
	const id = req.params.id;
	const { firstName, lastName, email, extension, jobTitle, profilePic } = req.body;
	const query = `UPDATE missionready.employees SET firstName = ?, lastName = ?, email = ?, extension = ?, jobTitle = ?, profilePic = ? WHERE employeeNumber = ?`;

	pool.query(query, [firstName, lastName, email, extension, jobTitle, profilePic, id], (err, results) => {
		if (err) {
			res.status(500).json({ error: 'Error updating employee data in the database.' });
		} else if (results.affectedRows === 0) {
			res.status(404).json({ error: `No employee found with ID ${id}.` });
		} else {
			res.status(200).json({ message: 'Employee data updated successfully.' });
		}
	});
});



module.exports = app;