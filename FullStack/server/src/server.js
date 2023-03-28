const app = require('./dbconnections/db.js');

const dotenv = require('dotenv').config();

const port = process.env.PORT; //||4001;

app.listen(port, (err) => {
	if (err) console.log(err);
	else console.log(`Server listening on port ${port}`);
});