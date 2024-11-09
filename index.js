const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

dotenv.config();

// Conectar base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Rutas disponibles:`);
    console.log(`Registro: http://localhost:${PORT}/api/auth/register (POST)`);
    console.log(`Login: http://localhost:${PORT}/api/auth/login (POST)`);
    console.log(
      `Ruta protegida: http://localhost:${PORT}/api/auth/protected (GET, requiere token)`
    );
  });
  