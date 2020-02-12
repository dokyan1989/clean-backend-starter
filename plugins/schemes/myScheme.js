module.exports = function (server, options) {
  return {
    authenticate: function (request, h) {
      console.log('authenticated');
      return h.authenticated({ credentials: options });
    }
  };
};
