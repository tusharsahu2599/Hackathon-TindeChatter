const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/chats', function(err, db) {
    if(!err) {
      console.log('MongoDB Connection Succeeded.');
    }
    else {
      console.log('Error in DB connection: ' + err);
    }
    });
}

module.exports = connect;