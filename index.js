import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.router.js';
import usersRouter from './src/routes/users.router.js';

const app = express();
const PORT = 3000;

// configuración básica de CORS para permitir todos los orígenes
app.use(cors());

// configuración avanzada de CORS para permitir dominios específicos 
const corsOptions = {
  // Dominios permitidos 
  origin: ['http://localhost:3000'],
  // Métodos HTTP permitidos 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // Encabezados permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], 
  // Permitir cookies o credenciales
  credentials: true
}; 
app.use(cors(corsOptions));

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Ruta 0: Enviar mensaje inicial
app.get("/", (req, res) => {
    res.send("<h1>Hola API RES Ejercicio TP Final - NodeJS</h1>");
});

// Agrega el módulo de rutas
app.use("/api/v1",productsRouter);
app.use("/api/v1",usersRouter);

// Error 404: Enviar mensaje si no se encuentra la ruta
app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada o Ruta inválida');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});