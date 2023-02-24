const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genres = require('../routes/genres.js')
const videogames = require('../routes/videogames.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', genres)
router.use('/videogames', videogames)

module.exports = router;
