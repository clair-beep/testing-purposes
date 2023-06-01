import express from 'express';
import routes from './routes/index';
import { connectDB } from './config/db';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

function createServer() {
  dotenv.config();

  const app = express();

  app.use(bodyParser.json());

  connectDB();

  app.get('/', (_req, res) => {
    res.send('Rest API is working');
  });

  app.use('/', routes);

  return app; // Return the app instance
}

export default createServer;
