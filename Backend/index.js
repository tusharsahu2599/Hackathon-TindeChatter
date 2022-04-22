const express = require('express');
const connect = require('./configs/db')
const dotenv = require('dotenv');
const path = require('path');

// import routes
const messageRoutes = require('./routes/message.route');
const userRoutes = require('./routes/user.route');
const chatRoutes = require("./routes/chat.route");


// import middleware
const {notFound, errorHandler} = require('./middlewares/error.middleware');


app.use("/user", userRoutes);
app.use("/chat", userRoutes);
app.use("/message", messageRoutes);
const app = express();
app.use(express.json());

connect();

