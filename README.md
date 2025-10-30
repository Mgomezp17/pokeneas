# Pokeneas API

API para Pokeneas del guetto construida con Express.js siguiendo las mejores prácticas.

## 🚀 Características

- ✅ Estructura modular y escalable
- ✅ Separación de responsabilidades (rutas, controladores, middleware)
- ✅ Manejo de errores centralizado
- ✅ Variables de entorno con dotenv
- ✅ Seguridad con Helmet y CORS
- ✅ Logging con Morgan y logger personalizado
- ✅ Health check endpoint

## 📁 Estructura del Proyecto

```
pokeneas/
├── src/
│   ├── config/          # Configuración de la aplicación
│   │   └── env.js       # Variables de entorno
│   ├── controllers/     # Lógica de negocio
│   │   └── homeController.js
│   ├── middleware/      # Middlewares personalizados
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── routes/          # Definición de rutas
│   │   ├── homeRoutes.js
│   │   └── index.js
│   └── utils/           # Utilidades y helpers
│       └── phrases.js
├── index.js             # Punto de entrada de la aplicación
├── package.json
└── .env.example         # Ejemplo de variables de entorno
```

## 🔧 Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

4. Configura las variables de entorno en `.env`:

```env
PORT=3000
NODE_ENV=development
HOSTNAME=localhost
```

## 🏃 Ejecución

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm start
```

## 📡 Endpoints

### GET `/api/`

Obtiene una frase aleatoria con el ID del contenedor.

**Respuesta:**

```json
{
  "phrase": "Get ready to be inspired…",
  "containerId": "hostname"
}
```

### GET `/health`

Health check endpoint.

**Respuesta:**

```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🛠️ Mejores Prácticas Implementadas

1. **Separación de responsabilidades**: Rutas, controladores y lógica de negocio están separados
2. **Middleware modular**: Middlewares reutilizables y configurables
3. **Manejo de errores**: Handler centralizado para errores
4. **Variables de entorno**: Configuración mediante variables de entorno
5. **Seguridad**: Helmet para headers de seguridad y CORS configurado
6. **Logging**: Sistema de logging para desarrollo y producción
7. **Estructura escalable**: Fácil agregar nuevas rutas y controladores

## 📝 Agregar Nuevas Rutas

1. Crea un nuevo archivo en `src/routes/` (ej: `pokeneasRoutes.js`)
2. Crea el controlador correspondiente en `src/controllers/`
3. Importa y registra la ruta en `src/routes/index.js`:

```javascript
import pokeneasRoutes from './pokeneasRoutes.js';
router.use('/pokeneas', pokeneasRoutes);
```

## 🔒 Seguridad

- Helmet: Configura headers HTTP seguros
- CORS: Control de acceso cross-origin
- Variables de entorno: No exponer secretos en el código

## 📦 Dependencias

- **express**: Framework web para Node.js
- **dotenv**: Carga variables de entorno
- **cors**: Middleware de CORS
- **helmet**: Seguridad HTTP headers
- **morgan**: Logger HTTP

## 👥 Autores

Mgomezp17 & Julianvb03
