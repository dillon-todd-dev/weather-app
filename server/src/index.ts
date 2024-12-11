import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.get('/health', (req, res) => {
  res.sendStatus(200);
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
