const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initializing Application
const app = express();

// require('./config/dynamodb.config');
require('./config/ripple-lib.config');

const corsOptions = {
    origin: '*',
    methods: 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
    allowedHeaders: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
};

// Integrate CORS options for all routes
app.use(cors(corsOptions));
app.options('*', cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '5mb', extended: true, strict: false}));

// Injecting routes
require('./routes/index.js')(app);

module.exports = app;
