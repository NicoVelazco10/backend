const Usuario = require("../models/usuario");
const usuarioCtrl = {};

/* Guardar Usuario*/
usuarioCtrl.createUsuario = async (req, res) => {
  var usuario = new Usuario(req.body);
  try {
    await usuario.save();
    res.json({
      status: "1",
      msg: "Usuario guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

/* Editar Usuario */
usuarioCtrl.editUsuario = async (req, res) => {
  const vusuario = new Usuario(req.body);
  try {
    await Usuario.updateOne({ _id: req.body._id }, vusuario);
    res.json({
      status: "1",
      msg: "Usuario updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

/* Eliminar Usuario */
usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Usuario removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: error.message,
    });
  }
};

/* Obtener todos los usuarios */
usuarioCtrl.getUsuarios = async (req, res) => {
  var usuarios = await Usuario.find();
  res.json(usuarios);
};

/* Obtener por ID */
usuarioCtrl.getById = async (req, res) => {
  try {
    const usuario = await Usuario.find({ _id: req.params.id });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion.",
    });
  }
};

/* Obtener por email */
usuarioCtrl.getByEmail = async (req, res) => {
  try {
    const {email}= req.query;
    const usuario = await Usuario.find({ email });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion.",
    });
  }
};

module.exports = usuarioCtrl;
