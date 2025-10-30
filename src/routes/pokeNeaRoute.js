import express from 'express';
import {
  getPokeNeaPhilosophyPhrase,
  getRandomPokeNeaInfo,
} from '../controllers/pokeNeaInfoController.js';

const router = express.Router();

router.get('/', getRandomPokeNeaInfo);
router.get('/phrase', getPokeNeaPhilosophyPhrase);

export default router;
