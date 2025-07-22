// Datos de usuarios
const usuarios = [
  { id: 1, nombre: 'Usuario 1' },
  { id: 2, nombre: 'Usuario 2' },
  { id: 3, nombre: 'Usuario 3' },
];

// Función 3: Mostrar todos los usuarios
export const getAllUsers = (req, res) => {
    res.json(usuarios);
};

// Función 4: Obtener usuario por ID
export const getUserId = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id === usuarioId);

    if(usuario){
        res.json(usuario);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};