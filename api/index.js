const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
const connect = require('./db')
const noteRoute = require('./controller/note.controller')
const deleteRoute = require('./controller/note.controller')
const updateRoute = require('./controller/note.controller')
const getRoute = require('./controller/note.controller')
const getallRoute = require('./controller/note.controller')
const userRoute = require('./controller/user.controller')
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

app.use('/api/notes', noteRoute);
app.use('/api/deletenote', deleteRoute);
app.use('/api/updatenote', updateRoute);
app.use('/api/getnote', getRoute);
app.use('/api/getllnote', getallRoute);
app.use('/api/user', userRoute)