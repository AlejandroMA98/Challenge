const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequileze = require('./db/conexion');
const bookView = require('./view/bookView');
const categoryView = require('./view/catergoryView');
const userView = require('./view/userview');

const app = express();

app.use(express.json())
app.use(cors());

async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("\n Conexión estabilizada correctamente \n")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
    }
}

serverStart();

//Inicia vista
bookView(app);
categoryView(app);
userView(app);

