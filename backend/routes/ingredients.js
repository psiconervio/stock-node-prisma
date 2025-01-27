const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

// Definir rutas para ingredientes
router.get('/', ingredientsController.getAllIngredients);
router.post('/', ingredientsController.createIngredient);
router.delete('/:ingredientId', ingredientsController.deleteIngredient);

module.exports = router;
