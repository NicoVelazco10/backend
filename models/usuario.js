const mongoose = require("mongoose");
const { Schema } = mongoose;
const UsuarioSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  activo: { type: Boolean, required: true },
  perfil: { type: String, required: true }, //adminastrador, profesor, socio
  nombres: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: String, required: true },
  telefono: { type: String, required: true },
});

module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema)
