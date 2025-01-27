const prisma = require('../models/prisma');

// Obtener todos los ingredientes
const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await prisma.ingredient.findMany();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
};

// Crear un nuevo ingrediente
const createIngredient = async (req, res) => {
  const { name, unit, price, quantity } = req.body;
  try {
    const newIngredient = await prisma.ingredient.create({
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
};

// Eliminar un ingrediente
const deleteIngredient = async (req, res) => {
  const { ingredientId } = req.params;
  try {
    const deletedIngredient = await prisma.ingredient.delete({
      where: {
        id: Number(ingredientId),
      },
    });
    res.json(deletedIngredient);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar ingrediente' });
  }
};

module.exports = {
  getAllIngredients,
  createIngredient,
  deleteIngredient,
};
