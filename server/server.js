require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/usuario"));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, (err, res) => {

    if (err) throw new Error('Conexion a base de datos fallida');

    console.log('Conexión a base de datos exitosa');
});

app.listen(process.env.PORT, () => {
    console.log(" escuchando puerto ", 3000);
});