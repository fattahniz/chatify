require('dotenv').config();
const express = require('express');

const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');
// const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

// connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
