const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

const app = express();

//------------------ Database Connection --------------------------------->
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Connection to database failed: ', err)
    } else {
        console.log('Connection to database ' + config.db + ' is successfull....');
    }
});

//------------------ Parse application --------------------------------------->
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//------------------ Provide Static Directory for Frontend --------------------------------->
app.use(express.static(__dirname + '/client/dist/client/'));
app.use('/authentication', authentication);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on Port:8080');
});