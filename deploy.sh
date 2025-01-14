#!/bin/bash

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js if not installed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally if not installed
sudo npm install -g pm2

# Install dependencies
npm install

# Build the React app
npm run build

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  cat > .env << EOL
PORT=3000
NODE_ENV=production
REACT_APP_API_URL=http://your-ec2-ip:3000
PUBLIC_URL=http://your-ec2-ip:3000
REACT_APP_IMAGE_PATH=/images
PM2_INSTANCES=max
PM2_EXEC_MODE=cluster
EOL
fi

# Start the server using PM2
pm2 start ecosystem.config.js

# Save PM2 process list and set up startup script
pm2 save
sudo pm2 startup 