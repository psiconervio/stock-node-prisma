const express = require('express');
const prisma = require('@prisma/client').PrismaClient;
const app = express();
const port = 3000;

// Inicializa Prisma Client
const prismaClient = new prisma();

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET: Obtener todos los ingredientes
app.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await prismaClient.ingredient.findMany();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

// Ruta POST: Crear un nuevo ingrediente
app.post('/ingredients', async (req, res) => {
  const { name, unit, price, quantity } = req.body;
  try {
    const newIngredient = await prismaClient.ingredient.create({
      data: {
        name,
        unit,
        price,
        quantity,
      },
    });
    res.json(newIngredient);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear ingrediente' });
  }
});

// Ruta DELETE: Eliminar un ingrediente
app.delete('/ingredients/:ingredientId', async (req, res) => {
  const { ingredientId } = req.params;
  try {
    const deletedIngredient = await prismaClient.ingredient.delete({
      where: {
        id: Number(ingredientId),  // Asegúrate de convertir a número si es necesario
      },
    });
    res.json(deletedIngredient);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar ingrediente' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
