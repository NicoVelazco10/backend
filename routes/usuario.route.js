//defino controlador para el manejo de CRUD
const usuarioCtrl = require('../controllers/usuario.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


//Ruta para guardar un Usuario
router.post('/',  usuarioCtrl.createUsuario);

//Ruta para el login
router.post('/login', usuarioCtrl.login);

//Ruta para editar un Usuario por ID
router.put('/:id', usuarioCtrl.editUsuario);

//Ruta para eliminar un Usuario por ID
router.delete('/:id',  usuarioCtrl.deleteUsuario);

//Ruta para obtener un Usuario por Email
router.get('/email', usuarioCtrl.getByEmail);

//Ruta para obtener todos los Usuarios
router.get('/', usuarioCtrl.getUsuarios);

//Ruta para obtener un Usuario por ID
router.get('/:id', usuarioCtrl.getById);

//exportamos el modulo de rutas
module.exports = router;