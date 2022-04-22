const express = require('express');
const connect = require('./configs/db')
const dotenv = require('dotenv');
const path = require('path');

// import routes
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');

// import middleware
const {notFound, errorHandler} = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

connect();