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
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(compression()); // Enable gzip compression
app.use(morgan('combined')); // Log incoming requests

// Serve static files from the React build directory
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Handle React routing, return all requests to the React app
app.get('*', (req, res, next) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) {
      next(err); // Pass errors to the error handler
    }
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
