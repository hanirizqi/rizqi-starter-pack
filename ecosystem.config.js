module.exports = {
  apps: [
    {
      name: 'Example',
      port: 5000,
      exec_mode: 'cluster',
      watch: ["server", "client"],
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}