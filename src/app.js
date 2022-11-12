const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


app.use(express.json(), cors(), morgan('dev'), fileUpload(),express.urlencoded({ extended: false }));
app.use('/api/productos', require('./routes/productos.routing'));

module.exports = app;