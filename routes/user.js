const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.getUsers);
router.post('/update', userController.updateUser);
router.post('/add', userController.addUser); // Ruta para agregar un nuevo usuario
router.post('/delete', userController.deleteUser); // Ruta para eliminar un usuario

module.exports = router;
