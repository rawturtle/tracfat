const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/api/tracfit');

const app = express();


//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// User Routes
app.use('/api/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


