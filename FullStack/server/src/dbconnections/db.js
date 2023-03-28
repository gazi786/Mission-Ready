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
			res.status(500).json({ err: 'Error retrieving data from database for id ' + id });
		} else {
			res.json(results);
		}
	});
});

module.exports = app;