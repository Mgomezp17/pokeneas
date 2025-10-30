import os from 'os';
import { phrases } from '../utils/phrases.js';

export const getHome = (req, res) => {
  try {
    const number = Math.floor(Math.random() * phrases.length);
    const response = {
      phrase: phrases[number],
      containerId: os.hostname(),
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la frase' });
  }
};
