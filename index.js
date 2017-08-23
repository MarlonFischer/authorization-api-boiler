// Main starting point of the application
const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

const router = require('./router');

// DB SETUP
mongoose.connect('mongodb://localhost/auth', {
    useMongoClient: true
});

// create instance of express
const app = express();

// App Setup
// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
