const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Para parsear el cuerpo de las solicitudes POST

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
