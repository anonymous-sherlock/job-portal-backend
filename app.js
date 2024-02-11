const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./Routes/userRoute');
const jobRoute = require('./Routes/jobRoute');
const applyRoute = require('./Routes/applyRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors');
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: true, withCredentials: true }))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads',express.static("./uploads"));

// using routes
const path = '/api-v1/';
app.use(`${path}user`, userRoute);
app.use(`${path}job`, jobRoute);
app.use(`${path}apply`, applyRoute);

module.exports = app;
