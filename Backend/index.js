const express = require('express');
const connect = require('./configs/db')
const dotenv = require('dotenv');
const path = require('path');

// const { register } = require('./controllers/user.controller');
const userController = require('./controllers/user.controller');

const app = express();
app.use(express.json());

// import routes

app.post("/register", userController);
app.get("/register", userController);
// app.post('/register', function(req, res){
//     register
//   });

// 

// app.use("/user", userRoutes);
// app.use("/chat", chatRoutes);
// app.use("/message", messageRoutes);


// import middleware
// const {notFound, errorHandler} = require('./middlewares/error.middleware');



app.listen(3001, async() => 
{
    try{
        connect();
    }catch(err){
        console.log(err);
    }
    console.log('Server is running on port 3000');
}
);
