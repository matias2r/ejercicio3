const mongoose = require("mongoose");

// Definicion de esquema Schema para usuarios
const usuariosSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Exportar el modelo
module.exports = mongoose.model("users", usuariosSchema);
