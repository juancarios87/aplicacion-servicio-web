const express = require('express')
const app = express()
const port = 8080;

// Funciona con la ruta: http://localhost:8080/
app.get('/', (req, res) => {
  res.send('Hello WebServer')
});

// Funciona con la ruta: http://localhost:8080/hola-mundo/
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World')
  });

// Manejo de error: CUalquier otra ruta no definida aqui dispara error
app.get('*', (req, res) => {
    res.send('404 | Page not found')
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })