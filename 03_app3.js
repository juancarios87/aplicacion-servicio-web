const express = require('express');
const app = express();
const port = 8080;

// FUncion que se ejecuta al inicio de una app
// Servir contenido estatico.
// Se espesifica el nombre del archivo en el cual se encuentra en index.html
// En este caso "public".
// Funciona con la ruta: http://localhost:8080/
app.use ( express.static('public'));

// Funciona con la ruta: http://localhost:8080/hola-mundo/
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World');
  });

// Manejo de error: CUalquier otra ruta no definida aqui dispara error.
// Sirviendo contenido estatico.
// Consume el html "404.html" que se definio en la carpeta "public"
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })