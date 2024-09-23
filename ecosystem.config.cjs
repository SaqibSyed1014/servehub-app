module.exports = {
  apps: [
    {
      name: 'adminapp',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'max',
      script: '/public_html/server/index.mjs',
      env: {
        NITRO_PORT: 3001,
        HOST: '0.0.0.0'
      }
    }
  ]
}