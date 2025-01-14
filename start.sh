#!/bin/bash

# Build the app if build directory doesn't exist
if [ ! -d "build" ]; then
  echo "Building React app..."
  npm run build
fi

# Start the server
echo "Starting server..."
node server.js 