import express from 'express';
import pokeNeaRoute from './pokeNeaRoute.js';

const router = express.Router();

router.use('/pokenea', pokeNeaRoute);

export default router;
