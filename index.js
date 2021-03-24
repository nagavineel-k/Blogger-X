const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Connection to database failed: ', err)
    } else {
        console.log('Connection to database ' + config.db + ' is successfull....');
    }
});

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on Port:8080');
});