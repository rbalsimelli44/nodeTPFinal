
# ----------------------------------
# node JS comisión #25023 - TP Final
# ----------------------------------

API REST para la gestión de productos

---------------
Requerimientos
---------------
# OK #1: Configuración Inicial (estructura directorios, npm init, index.js, ESModules, start.js)
# OK #2: Instalación de dependencias (express, cors, body-parser, dotenv, firebase y jsonwebtoken)
# OK #3: Configuración del servidor (servidor web exress, configuración CORS, middleware body-parser, 404, .env)
# OK #4: Rutas (GET /api/products, GET /api/products/:id, POST /api/products/create, DELETE /api/products/:id, POST /auth/login)
# OK #5: Controladores y Servicios (capa de controladores, capa de servicios)
# OK #6: Acceso a los datos (Firestore en Firebase, conección Firebase, métodos, servicios)
# OK #7: Protección de rutas (Configurar JWT, middleware autenticación, validar usuario y Bearer Token)

-------------------
Parámetros para uso
-------------------
POST /api/v1/login + Body {JSON}        * valida usuario, password y genera token de sesión
GET /api/v1/productos                   * obtener todos los productos
GET /api/v1/productos/:id               * obtiene un producto por :id
POST /api/v1/productos + Body {JSON}    * crear un nuevo producto
DELETE /api/v1/productos/:id            * borrar un producto por :id
GET /api/v1/usuarios                    * muestra usuarios definidos
GET /api/v1/usuarios/:id                * muestra un usuario por :id     

------------------
Códigos de estado
------------------
200 - OK: Operación exitosa
201 - Created: Recurso creado exitosamente
204 - No Content: Recurso eliminado exitosamente
400 - Bad Request: Datos de entrada inválidos
404 - Not Found: Recurso no encontrado

------------------------
Estructura del proyecto
------------------------
src/
├── Controllers/
│   └── products.controller.js
├── Models/
│   └── Product.js
└── Routes/
    └── products.router.js

----------------------
Tecnologías utilizadas
----------------------
Node.js
Express.js
ES6 Modules
firebase/firestore
JWT