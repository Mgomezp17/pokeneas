import { pokeneas } from '../constants/pokeNeas.js';
import os from 'os';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const getRandomPokeNeaInfo = (req, res) => {
  try {
    const { id, name, height, hability } =
      pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.json({
      data: { id, name, height, hability },
      container_id: os.hostname(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Pokenea aleatorio' });
  }
};

export const getPokeNeaPhilosophyPhrase = (req, res) => {
  try {
    const { philosophy_phrase, image } =
      pokeneas[Math.floor(Math.random() * pokeneas.length)];
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templatePath = path.join(__dirname, '../templates/pokenea.html');

    readFile(templatePath, 'utf8')
      .then(template => {
        const html = template
          .replace('{{IMAGE}}', image)
          .replace('{{PHRASE}}', philosophy_phrase)
          .replace('{{CONTAINER_ID}}', os.hostname());
        res.send(html);
      })
      .catch(() => {
        res.status(500).json({ error: 'Error al cargar la plantilla' });
      });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la frase filosófica' });
  }
};
