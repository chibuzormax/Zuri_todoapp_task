const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const todoRoute = require('./router/todoRoutes');

connect();

const app = express();
app.use(json());
app.use('/todo', todoRoute);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));