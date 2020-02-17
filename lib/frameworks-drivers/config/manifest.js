module.exports = {
  server: {
    port: 3000,
    host: 'localhost'
  },
  register: {
    plugins: [
      {
        plugin: './routes/heroes',
        routes: {
          prefix: '/api'
        }
      }
    ]
  }
};
