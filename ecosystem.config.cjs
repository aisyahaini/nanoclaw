module.exports = {
  apps: [
    {
      name: 'nanoclaw',
      script: 'dist/index.js',
      interpreter: 'node',
      cwd: 'D:/AI Specialist/AI Projects/nanoclaw-baru/nanoclaw',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
