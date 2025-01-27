const prisma = require('../models/prisma');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

module.exports = {
  getAllUsers,
};
