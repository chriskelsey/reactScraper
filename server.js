//Import npm packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./models');

//Declare Port
const PORT = process.env.PORT || 3001;

//Create our express server
const app = express();

//Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/nytreact'
);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
})