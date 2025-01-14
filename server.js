require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 80;

// Middleware
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for React app
  crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(morgan('combined'));
app.use(express.json());

// Serve static files from the React build directory
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Handle React routing, return all requests to the React app
app.get('*', (req, res, next) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) {
      next(err);
    }
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
    🚀 Server is running!
    🔉 Listening on port ${PORT}
    📭 http://localhost:${PORT}
  `);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});
