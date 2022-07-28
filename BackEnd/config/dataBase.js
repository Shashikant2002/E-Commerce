const mongoose = require('mongoose');

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`MongoDb Connected With Server ${data.connection.host}`);
    }).catch((err) => {
        console.log(`Database Connection Falled ${err}`);
    })
}

module.exports = connectDataBase;