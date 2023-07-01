const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
const connect = require('./db')
const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

/**connection */
app.listen(port, () => {
    if(!port){
        console.log('Not Connected to port:', port);
    }
    else{
        console.log('Port listening to:', port);
    }
    connect();
})