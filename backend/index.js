const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes/index')

const port = process.env.PORT;


//Intiailize Express App
const app = express();

//Enabling CORS for any unknown origin (https://xyz.example.com) 
app.use(cors());


// Parse application/json
app.use(bodyParser.json());


// application routes
app.use("/", routes);

//App listening on:
app.listen(port, () => {
    console.log(`${process.env.PRODUCT_NAME} app listening on port ${port}`)
});