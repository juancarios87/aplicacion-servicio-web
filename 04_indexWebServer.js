// Cargamos las variables de entorno
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Indicamos que utilizaremos "hbs --> handlebars"
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Funciona con la ruta: http://localhost:8080/index.html
app.use ( express.static('public'));

// Renderisamos la vista "home.hbs" que creamos.
// Como "handlebars" tiliza MVC.
// El codigo entre las lineas 17 & 22 es nuestro controlador.
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Rios',
        titulo: 'Ing Sistemas'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Rios',
        titulo: 'Ing Sistemas'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Rios',
        titulo: 'Ing Sistemas'
    });
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
})