import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Serve React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
  );
}

app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));
