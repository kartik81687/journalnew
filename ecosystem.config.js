module.exports = {
  apps: [{
    name: "journal-app",
    script: "server.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    instances: "max",
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
} 