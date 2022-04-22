const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}

module.exports = connect;