const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./Routes/userRoute');
const jobRoute = require('./Routes/jobRoute');
const applyRoute = require('./Routes/applyRoute');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');

dotenv.config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

// Routes
const path = '/api-v1/';
app.use(`${path}user`, userRoute);
app.use(`${path}job`, jobRoute);
app.use(`${path}apply`, applyRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

module.exports = app;
