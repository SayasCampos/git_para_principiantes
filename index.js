const express = require ('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Git add --patch --Este sirve para solamente subir pequeños fragmentos de código para que se puedan terminar después
app.get('/hola', (req,res)=>{
    res.send('Hola Ruta, estoy en la carpeta de hola')
});


app.get('/adios', (req,res)=>{
    res.send('Adios Ruta, estoy en la carpeta de adios')
});

app.get('/login', (req,res)=>{
    res.send('Ruta de Login Nueva')
});
   
app.post('/registro', (req,res)=>{
    res.send('Recibiendo información de registro')
});

app.listen(3000, () => {
    console.log('Example App listening to port 3000!');

});
