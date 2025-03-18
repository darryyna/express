// src/app.js
const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const swaggerSetup = require('./swagger');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
});

swaggerSetup(app);

app.use((req, res, next) => {
    res.status(404).json({ message: 'No route found' });
});

app.use(errorHandler);

module.exports = app;