const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware global
app.use(express.json());
app.use(cors());

// Rutas
const ingredientRoutes = require('./routes/ingredients');
const userRoutes = require('./routes/users');

// Usar las rutas de ingredientes
app.use('/api/ingredients', ingredientRoutes);

// Usar las rutas de usuarios
app.use('/api/users', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
