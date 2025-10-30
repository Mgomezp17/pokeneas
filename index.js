import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './src/config/env.js';
import routes from './src/routes/index.js';
import {
  errorHandler,
  notFoundHandler,
} from './src/middleware/errorHandler.js';
import { requestLogger } from './src/middleware/logger.js';

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
}
app.use(requestLogger);

// Routes
app.use('/', routes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🚀 Servidor corriendo en puerto ${config.port}`);
  console.log(`📦 Entorno: ${config.nodeEnv}`);
  console.log(`🌐 Hostname: ${config.hostname}`);
});
