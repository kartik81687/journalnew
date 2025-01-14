module.exports = {
  apps: [{
    name: "journal-app",
    script: "server.js",
    env: {
      NODE_ENV: "production",
      PORT: 80
    },
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }]
} 