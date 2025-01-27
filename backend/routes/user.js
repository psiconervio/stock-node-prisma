const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Ruta para obtener todos los usuarios
router.get('/', usersController.getAllUsers);

module.exports = router;
