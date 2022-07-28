const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require('./config/dataBase')

// config
dotenv.config({ path: 'BackEnd/config/config.env' });

// Connecting To Data Base 
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Port Listening on http://localhost:${process.env.PORT}`);
})