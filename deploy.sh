#!/bin/bash

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js if not installed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies
npm install
npm install --save helmet compression morgan

# Build the React app
npm run build

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  cat > .env << EOL
PORT=80
NODE_ENV=production
PUBLIC_URL=http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
REACT_APP_IMAGE_PATH=/images
EOL
fi

# Start the server
node server.js 