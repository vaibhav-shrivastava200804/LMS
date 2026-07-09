import http from 'http';
import app from './app.js';
import 'dotenv/config';
const PORT = process.env.PORT || 3500;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`LMS Server running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => process.exit(0));
});