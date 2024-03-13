const http = require('http');

// Creamo un servidor.
http.createServer( ( req, res ) => {
   
    // Imprime la solicitud "Request" en la consola
    //console.log(req);
    
    // Para probar manejo de error comentamos la linea 23 y quitamos el comentario de las lineas 13 o 17 & 18.
    // Para probar manejo de error comentamos el bloque entre las lineas 26 & 39
    // Establecemos un mensaje de error.
    // Forma I
    //res.writeHead(200);
    //Forma II
    // El codigo " { 'Content-Type': 'text/plain' }" indica que se esta retornando un archivo de texto.
    // Esto se puede evidenciar en la seccion "Responce Headres" --> "Content-Type:"
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.write('404 | Page not found');
    
    // Para probar una respuesta establecida quitamos el comentario de la linea 23 y comentamos las lineas 13, 17 & 18
    // Para probar una respuesta establecida comentamos el bloque entre las lineas 26 & 39
    // Establecemos una respuesta
    //res.write('Hola Mundo');

    // Para probar el retorno de un "JSon" comentamos las lineas 13, 17, 18 & 23 y se quita el comentario del bloque entre las lineas 26 o 27 & 39  y el bloque entre las lineas 32 6 35
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, { 'Content-Type': 'text/csv' })

    // Creamos un objeto "persona"
    const persona = {
       id: 1,
       nombre: 'Juan'
    };
   
   // Retornamos el objeto "persona"
   // Para probar la resuesta con archivos "json" o "plain" descomentamos la linea 39 y comentamos el bloque entre las lineas 42 & 46 y el bloque entre las lineas 32 6 35
   res.write(JSON.stringify( persona ));

   // Para probar creacion de archivo "csv" comentamos la linea 38 y descomentamos el bloque entre las lineas 42 & 46
   //res.write('id,nombre\n');
   //res.write('1,Juan\n');
   //res.write('2,Marcela\n');
   //res.write('3,Martin\n');
   //res.write('4,Lucero\n');

   // Indicamos que se termino de establecer una respuesta.
   res.end();
   // Procedemos a abrir Google Chrome en el link "http://localhost:8080/"

})
.listen (8080 );

console.log('Escuchando el puerto', 8080);